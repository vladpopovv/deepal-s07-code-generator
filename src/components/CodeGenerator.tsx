import React, { useEffect, useMemo, useState } from 'react';

function toSha256Hex(input: string): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode(input);
	return crypto.subtle.digest('SHA-256', data).then((hashBuffer) => {
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
	});
}

function formatDateForInput(date: Date): string {
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

const CodeGenerator: React.FC = () => {
	const [vin, setVin] = useState<string>('');
	const [dateStr, setDateStr] = useState<string>('');
	const [result, setResult] = useState<string>('');

	useEffect(() => {
		const today = new Date();
		setDateStr(formatDateForInput(today));
	}, []);

	const date = useMemo(() => (dateStr ? new Date(dateStr) : null), [dateStr]);

	async function calculateCodes(vinLast4: string, dateObj: Date): Promise<string> {
		const mmdd = String(dateObj.getMonth() + 1).padStart(2, '0') + String(dateObj.getDate()).padStart(2, '0');
		const base = vinLast4 + mmdd;
		const hashHex = await toSha256Hex(base);
		const day = dateObj.getDate();

		let output = `📅 Дата: ${dateObj.toLocaleDateString('ru-RU')}  |  VIN: ${vinLast4}\n\n`;
		output += `🔬 SHA256:\n${hashHex}\n\n`;
		output += '✅ Основной код (сдвиг +1):\n';

		const centerIndex = day + 1;
		if (centerIndex >= 0 && centerIndex + 8 <= hashHex.length) {
			const mainCode = hashHex.slice(centerIndex, centerIndex + 8);
			output += `➡ ${mainCode}\n`;
		}

		output += `\n🔁 Альтернативные варианты:\n`;
		for (let offset = -2; offset <= 2; offset++) {
			const start = day + offset;
			if (start >= 0 && start + 8 <= hashHex.length && offset !== 1) {
				const code = hashHex.slice(start, start + 8);
				const label = offset === 0 ? 'по центру' : `сдвиг ${offset > 0 ? '+' : ''}${offset}`;
				output += `• ${code} (${label})\n`;
			}
		}
		return output;
	}

	async function onGenerate() {
		if (!/^\d{4}$/.test(vin.trim())) {
			setResult('❌ Укажите корректный VIN (4 цифры)');
			return;
		}
		if (!date) {
			setResult('❌ Укажите дату');
			return;
		}
		const outputMain = await calculateCodes(vin.trim(), date);
		const nextDate = new Date(date);
		nextDate.setDate(date.getDate() + 1);
		const outputNext = await calculateCodes(vin.trim(), nextDate);
		setResult(`${outputMain}\n⚠️ Если код не сработал — попробуйте с датой на следующий день:\n\n${outputNext}`);
	}

	return (
		<div>
			<label htmlFor="vin">Последние 4 цифры VIN:</label>
			<input id="vin" maxLength={4} placeholder="например: 3506" value={vin} onChange={(e) => setVin(e.target.value)} />
			<label htmlFor="date">Дата (по Китаю):</label>
			<input id="date" type="date" value={dateStr} onChange={(e) => setDateStr(e.target.value)} />
			<button onClick={onGenerate}>Сгенерировать код</button>
			<div style={{ marginTop: 20 }}>
				{result && <pre>{result}</pre>}
			</div>
		</div>
	);
};

export default CodeGenerator;


