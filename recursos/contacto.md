---
layout: page
title: "Contacto"
---

# Contacto

Este espacio está abierto a quien quiera **proponer una colaboración**
—incluyendo aportar datos de coste, testimonio profesional, o datos para
calcular la HME de otra profesión u oficio distinto de los ya cubiertos por
las [herramientas]({{ '/herramientas/' | relative_url }})—, **informar de
una norma, actuación judicial o administrativa relevante** no incluida
todavía en la página (véanse [Advocacy]({{ '/advocacy/' | relative_url }})
y [Noticias]({{ '/noticias/' | relative_url }})), o simplemente dejar
**feedback**: desde comentarios positivos hasta sugerencias de mejora o
observaciones sobre la metodología o el marco legal del proyecto.

<div style="margin:24px 0; max-width:640px;">
  <form id="contact-form" onsubmit="return enviarContacto(event)">
    <input type="hidden" name="access_key" value="7ac3388f-0bd5-4965-bd7c-6009c1386d44">
    <input type="hidden" name="subject" value="Nuevo mensaje — Formulario de contacto HME/MEF">
    <input type="hidden" name="from_name" value="hme-mef.github.io">
    <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">

    <label for="c-tipo" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Motivo del mensaje</label>
    <select id="c-tipo" name="motivo" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">
      <option value="" selected disabled>— Selecciona un motivo —</option>
      <option value="Propuesta de colaboración (aportar datos de costes, testimonio profesional, o para calcular HME de otra profesión u oficio, etc.)">Propuesta de colaboración (aportar datos de costes, testimonio profesional, o para calcular HME de otra profesión u oficio, etc.)</option>
      <option value="Informar de una norma, actuación judicial o administrativa relevante no incluida en la página">Informar de una norma, actuación judicial o administrativa relevante no incluida en la página</option>
      <option value="Feedback o comentarios sobre la página y la propuesta (incluye comentarios positivos, mejoras, marco legal o metodología)">Feedback o comentarios sobre la página y la propuesta (incluye comentarios positivos, mejoras, marco legal o metodología)</option>
      <option value="Prensa / medios">Prensa / medios</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="c-nombre" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Nombre (opcional)</label>
    <input type="text" id="c-nombre" name="nombre" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-email" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Tu email (opcional, para poder responderte)</label>
    <input type="email" id="c-email" name="email" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-mensaje" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Mensaje</label>
    <textarea id="c-mensaje" name="mensaje" rows="7" required style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px; font-family:inherit;"></textarea>

    <button type="submit" id="contact-submit" style="background:#1F3864; color:#fff; border:none; padding:12px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer;">
      Enviar mensaje
    </button>
    <div id="contact-status" style="font-size:13px; margin-top:10px;"></div>
    <div style="font-size:12px; color:#7f8c8d; margin-top:8px;">
      El mensaje se envía directamente al autor del proyecto a través de
      <a href="https://web3forms.com/" target="_blank" rel="noopener">Web3Forms</a>.
      Este sitio no almacena tus datos; Web3Forms procesa el envío únicamente
      para reenviarlo por email.
    </div>
  </form>
</div>

<script>
function enviarContacto(e){
  e.preventDefault();
  var form = document.getElementById('contact-form');
  var btn = document.getElementById('contact-submit');
  var status = document.getElementById('contact-status');

  var mensaje = document.getElementById('c-mensaje').value.trim();
  if (!mensaje) {
    status.style.color = '#a3261a';
    status.textContent = 'Escribe un mensaje antes de enviar.';
    return false;
  }

  btn.disabled = true;
  btn.textContent = 'Enviando…';
  status.textContent = '';

  var data = new FormData(form);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: data
  })
  .then(function(res){ return res.json(); })
  .then(function(json){
    if (json.success) {
      status.style.color = '#1e7e42';
      status.textContent = '✅ Mensaje enviado. Gracias — se responderá lo antes posible.';
      form.reset();
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
    } else {
      throw new Error(json.message || 'Error desconocido');
    }
  })
  .catch(function(err){
    status.style.color = '#a3261a';
    status.textContent = 'No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.';
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
  });

  return false;
}
</script>

---

**Última actualización**: Septiembre 2026
