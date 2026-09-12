---
layout: page
title: "Herramientas"
---

## Calculadora MEF — Honorarios Mínimos Equivalentes

Utiliza esta herramienta para calcular el mínimo de honorarios equivalentes para tu profesión y situación.

<style>
    .calculator-container {
        background: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 2rem;
        margin: 2rem 0;
    }

    .calc-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .calc-section {
        background: white;
        padding: 1.5rem;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
    }

    .calc-section h3 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    .form-group input,
    .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        font-size: 1rem;
    }

    .form-group input:focus,
    .form-group select:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }

    .result-item {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #e0e0e0;
    }

    .result-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .result-label {
        font-size: 0.85rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
    }

    .result-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: #2c3e50;
    }

    .result-unit {
        font-size: 1rem;
        font-weight: 400;
        color: #666;
        margin-left: 0.5rem;
    }

    .result-highlight {
        border: 2px solid #3498db;
        padding: 1rem;
        margin: 1.5rem 0;
        border-radius: 4px;
        background: #f0f7ff;
    }

    .formula-box {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        color: #2c3e50;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
    }

    .button-group button {
        flex: 1;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .btn-calculate {
        background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
        color: white;
    }

    .btn-calculate:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    }

    .btn-reset {
        background: #e0e0e0;
        color: #2c3e50;
    }

    .btn-reset:hover {
        background: #d0d0d0;
    }

    .info-box {
        background: #e8f5e9;
        border-left: 4px solid #27ae60;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .warning-box {
        background: #fff3cd;
        border-left: 4px solid #e74c3c;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 4px;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        .calc-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .result-value {
            font-size: 1.5rem;
        }

        .button-group {
            flex-direction: column;
        }
    }
</style>

<div class="calculator-container">
    <div class="calc-grid">
        <!-- Entrada de datos -->
        <div class="calc-section">
            <h3>📋 Parámetros</h3>

            <div class="info-box">
                <strong>Fórmula:</strong> MEF = Costo Directo + Gastos Generales (30%) + Beneficio Industrial (15%)
            </div>

            <div class="form-group">
                <label for="profession">Profesión</label>
                <select id="profession" onchange="changeProfession()">
                    <option value="custom">Personalizado</option>
                    <option value="architect" selected>Arquitecto/a Superior</option>
                    <option value="architect-tech">Arquitecto/a Técnico/a</option>
                    <option value="engineer">Ingeniero/a Técnico Superior</option>
                    <option value="engineer-tech">Ingeniero/a Técnico</option>
                    <option value="surveyor">Topógrafo/a</option>
                    <option value="consultant">Consultor/a</option>
                </select>
            </div>

            <div class="form-group">
                <label for="annualSalary">Salario Anual Equivalente (€)</label>
                <input type="number" id="annualSalary" value="35000" min="15000" max="100000" step="1000" oninput="syncInput()">
            </div>

            <div class="form-group">
                <label for="generalExpenses">Gastos Generales (%)</label>
                <input type="number" id="generalExpenses" value="30" min="20" max="50" step="1" oninput="calculate()">
            </div>

            <div class="form-group">
                <label for="industrialMargin">Beneficio Industrial (%)</label>
                <input type="number" id="industrialMargin" value="15" min="10" max="30" step="1" oninput="calculate()">
            </div>

            <div class="form-group">
                <label for="billableHours">Horas Facturables al Año</label>
                <input type="number" id="billableHours" value="1256" min="800" max="1800" step="10" oninput="calculate()">
            </div>

            <div class="button-group">
                <button class="btn-calculate" onclick="calculate()">Calcular MEF</button>
                <button class="btn-reset" onclick="reset()">Restablecer</button>
            </div>

            <div class="warning-box">
                <strong>Nota:</strong> Calculadora basada en modelo italiano (DM 17/6/2016). Valores estimativos según datos 2024 para Madrid.
            </div>
        </div>

        <!-- Resultados -->
        <div class="calc-section">
            <h3>📊 Resultados</h3>

            <div class="result-item">
                <div class="result-label">Costo Directo (Anual)</div>
                <div class="result-value">
                    €<span id="directCost">35,000</span>
                    <span class="result-unit">/año</span>
                </div>
            </div>

            <div class="result-item">
                <div class="result-label">Gastos Generales</div>
                <div class="result-value">
                    €<span id="generalExpensesResult">10,500</span>
                    <span class="result-unit">/año</span>
                </div>
            </div>

            <div class="result-item">
                <div class="result-label">Beneficio Industrial</div>
                <div class="result-value">
                    €<span id="industrialMarginResult">5,250</span>
                    <span class="result-unit">/año</span>
                </div>
            </div>

            <div class="result-highlight">
                <div class="result-label">MEF Anual Mínimo</div>
                <div class="result-value">
                    €<span id="mefAnnual">50,750</span>
                    <span class="result-unit">/año</span>
                </div>
                <p style="margin-top: 1rem; font-size: 0.95rem; color: #2c3e50;">
                    Equivalente a <strong><span id="mefHourly">40,43</span> €/hora</strong> 
                    (en <span id="billableHoursDisplay">1.256</span> h/año)
                </p>
            </div>

            <div class="formula-box">
                MEF = CD × 1.45<br>
                MEF = €35,000 × 1.45<br>
                <strong>MEF = €<span id="formulaResult">50,750</span></strong>
            </div>

            <p style="font-size: 0.9rem; color: #666; margin-top: 1rem;">
                <strong>Interpretación:</strong> Para un profesional con salario equivalente de €35.000/año, 
                el mínimo de honorarios debe ser aproximadamente €50.750/año.
            </p>
        </div>
    </div>
</div>

<script>
    // Datos por profesión (salarios estimados Madrid 2024)
    const professionData = {
        architect: { label: 'Arquitecto/a Superior', salary: 35000 },
        'architect-tech': { label: 'Arquitecto/a Técnico/a', salary: 28000 },
        engineer: { label: 'Ingeniero/a Técnico Superior', salary: 32000 },
        'engineer-tech': { label: 'Ingeniero/a Técnico', salary: 26000 },
        surveyor: { label: 'Topógrafo/a', salary: 25000 },
        consultant: { label: 'Consultor/a', salary: 30000 },
        custom: { label: 'Personalizado', salary: 35000 }
    };

    function syncInput() {
        calculate();
    }

    function changeProfession() {
        const profession = document.getElementById('profession').value;
        const salary = professionData[profession]?.salary || 35000;
        document.getElementById('annualSalary').value = salary;
        calculate();
    }

    function calculate() {
        const annualSalary = parseFloat(document.getElementById('annualSalary').value) || 0;
        const gg = parseFloat(document.getElementById('generalExpenses').value) || 30;
        const bi = parseFloat(document.getElementById('industrialMargin').value) || 15;
        const billableHours = parseFloat(document.getElementById('billableHours').value) || 1256;

        // Cálculos
        const generalExpensesAmount = annualSalary * (gg / 100);
        const industrialMarginAmount = annualSalary * (bi / 100);
        const mefAnnual = annualSalary + generalExpensesAmount + industrialMarginAmount;
        const mefHourly = billableHours > 0 ? mefAnnual / billableHours : 0;

        // Actualizar vista
        document.getElementById('directCost').textContent = annualSalary.toLocaleString('es-ES', { maximumFractionDigits: 0 });
        document.getElementById('generalExpensesResult').textContent = generalExpensesAmount.toLocaleString('es-ES', { maximumFractionDigits: 0 });
        document.getElementById('industrialMarginResult').textContent = industrialMarginAmount.toLocaleString('es-ES', { maximumFractionDigits: 0 });
        document.getElementById('mefAnnual').textContent = mefAnnual.toLocaleString('es-ES', { maximumFractionDigits: 0 });
        document.getElementById('mefHourly').textContent = mefHourly.toFixed(2);
        document.getElementById('billableHoursDisplay').textContent = billableHours.toLocaleString('es-ES');
        document.getElementById('formulaResult').textContent = mefAnnual.toLocaleString('es-ES', { maximumFractionDigits: 0 });
    }

    function reset() {
        document.getElementById('profession').value = 'architect';
        document.getElementById('annualSalary').value = 35000;
        document.getElementById('generalExpenses').value = 30;
        document.getElementById('industrialMargin').value = 15;
        document.getElementById('billableHours').value = 1256;
        calculate();
    }

    // Calcular al cargar
    calculate();
</script>

---

## Cómo usar la calculadora

### Paso 1: Selecciona tu profesión
La herramienta cargará automáticamente datos estimados de salario para tu profesión en Madrid (2024).

### Paso 2: Ajusta los parámetros
- **Salario Anual Equivalente**: Salario bruto anual de un profesional empleado con tu cualificación
- **Gastos Generales**: Típicamente 30% (referencia italiana DM 17/6/2016)
- **Beneficio Industrial**: Típicamente 15% (margen de ganancia empresarial)
- **Horas Facturables**: Total de horas de trabajo facturable por año (típicamente 70% utilización)

### Paso 3: Interpreta los resultados
El **MEF Anual Mínimo** es el piso de retribución que un profesional autónomo debería percibir anualmente, equivalente al costo real para un empleador de tener un empleado con la misma cualificación.

---

## Fórmula de cálculo

**MEF = Costo Directo + (Costo Directo × GG%) + (Costo Directo × BI%)**

Simplificado:

**MEF = Costo Directo × 1.45**

(si GG = 30% e BI = 15%)

---

## Referencia internacional

Esta calculadora utiliza como modelo de referencia el **Decreto Ministerial italiano DM 17/6/2016**, que establece tarifas mínimas de arquitectos e ingenieros en Italia basadas en análisis de costes similares.

### Parámetros por país

| País | Modelo | GG | BI |
|---|---|---|---|
| **Italia** | DM 17/6/2016 | 30% | 15% |
| **Propuesta HME (España)** | Basado en Italia | 30% | 15% |
| **Francia** | Referencias CNOA | 25-35% | 12-20% |
| **Alemania** | HOAI | Variable | Variable |

---

## Limitaciones y consideraciones

1. **Salarios estimados**: Basados en datos de 2024 para Madrid. Varían según región, experiencia, y especialidad.
2. **Horas facturables**: Utiliza 70% de utilización (benchmarks industria). Realidad puede variar según proyecto.
3. **Gastos generales**: Varían por tamaño de firma. Pequeños despachos pueden tener gastos superiores.
4. **Aplicación legal**: La calculadora es orientativa. Cumplimiento normativo depende de legislación vigente en tu jurisdicción.

---

## Más información

[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})  
[**Leer artículo académico →**]({{ '/publicaciones/' | relative_url }})  
[**Preguntas frecuentes →**]({{ '/recursos/faq/' | relative_url }})
