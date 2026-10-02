---
layout: page
title: "Contacto"
---

Este espacio está abierto a quien quiera dejar **feedback**: desde
comentarios positivos hasta sugerencias de mejora u observaciones sobre la
metodología o el marco legal del proyecto; **informar de una norma,
actuación judicial o administrativa relevante** no incluida todavía en la
página (véanse [Advocacy]({{ '/advocacy/' | relative_url }}) y
[Noticias]({{ '/noticias/' | relative_url }})); o **proponer una
colaboración** —incluyendo aportar datos de coste, testimonio profesional,
o datos para calcular la HME de otra profesión u oficio distinto de los ya
cubiertos por las [herramientas]({{ '/herramientas/' | relative_url }})—.
También puedes marcar la casilla del formulario para **recibir información
nueva sobre la propuesta** (novedades normativas, publicaciones, avances de
advocacy) dejando tu email.

<div style="margin:24px 0; max-width:640px;">
  <form id="contact-form" onsubmit="return enviarContacto(event)">
    <input type="hidden" name="access_key" value="7ac3388f-0bd5-4965-bd7c-6009c1386d44">
    <input type="hidden" name="subject" value="Nuevo mensaje — Formulario de contacto HME/MEF">
    <input type="hidden" name="from_name" value="hme-mef.github.io">
    <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">

    <label for="c-tipo" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Motivo del mensaje</label>
    <select id="c-tipo" name="motivo" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">
      <option value="" selected disabled>— Selecciona un motivo —</option>
      <option value="Feedback o comentarios sobre la página y la propuesta (incluye comentarios positivos, mejoras, marco legal o metodología)">Feedback o comentarios sobre la página y la propuesta (incluye comentarios positivos, mejoras, marco legal o metodología)</option>
      <option value="Informar de una norma, actuación judicial o administrativa relevante no incluida en la página">Informar de una norma, actuación judicial o administrativa relevante no incluida en la página</option>
      <option value="Propuesta de colaboración (aportar datos de costes, testimonio profesional, o para calcular HME de otra profesión u oficio, etc.)">Propuesta de colaboración (aportar datos de costes, testimonio profesional, o para calcular HME de otra profesión u oficio, etc.)</option>
      <option value="Prensa / medios">Prensa / medios</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="c-nombre" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Nombre (opcional)</label>
    <input type="text" id="c-nombre" name="nombre" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-email" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Tu email <span id="c-email-req-note">(opcional, para poder responderte)</span></label>
    <input type="email" id="c-email" name="email" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <div style="margin-bottom:14px; padding:10px 12px; background:#f4f6f8; border-radius:6px;">
      <label for="c-suscripcion" style="display:flex; align-items:flex-start; gap:8px; font-size:13px; cursor:pointer; font-weight:400;">
        <input type="checkbox" id="c-suscripcion" name="suscripcion" value="Sí, quiere recibir información nueva sobre la propuesta HME/MEF" style="margin-top:3px;">
        <span>Quiero recibir información nueva sobre la propuesta (novedades normativas, publicaciones, avances de advocacy). Requiere dejar tu email arriba.</span>
      </label>
      <div style="font-size:11.5px; color:#7f8c8d; margin-top:6px; margin-left:24px;">
        Tu email se usará únicamente para enviarte estas novedades, de forma manual por el autor del proyecto (no hay lista de correo automatizada). Puedes darte de baja en cualquier momento respondiendo a cualquier envío.
      </div>
    </div>

    <label for="c-mensaje" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Mensaje</label>
    <textarea id="c-mensaje" name="mensaje" rows="7" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px; font-family:inherit;" placeholder="Si solo quieres suscribirte a las novedades, puedes dejar este campo en blanco."></textarea>

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
document.addEventListener('DOMContentLoaded', function(){
  var chk = document.getElementById('c-suscripcion');
  var emailInput = document.getElementById('c-email');
  var emailNote = document.getElementById('c-email-req-note');
  if (chk && emailInput && emailNote) {
    chk.addEventListener('change', function(){
      if (chk.checked) {
        emailInput.setAttribute('required', 'required');
        emailNote.textContent = '(obligatorio para poder enviarte información)';
      } else {
        emailInput.removeAttribute('required');
        emailNote.textContent = '(opcional, para poder responderte)';
      }
    });
  }
});

function enviarContacto(e){
  e.preventDefault();
  var form = document.getElementById('contact-form');
  var btn = document.getElementById('contact-submit');
  var status = document.getElementById('contact-status');

  var mensajeEl = document.getElementById('c-mensaje');
  var mensaje = mensajeEl.value.trim();
  var suscripcion = document.getElementById('c-suscripcion');
  var email = document.getElementById('c-email').value.trim();
  var soloSuscripcion = suscripcion && suscripcion.checked;

  if (!mensaje && !soloSuscripcion) {
    status.style.color = '#a3261a';
    status.textContent = 'Escribe un mensaje antes de enviar.';
    return false;
  }

  if (soloSuscripcion && !email) {
    status.style.color = '#a3261a';
    status.textContent = 'Deja tu email para poder enviarte información nueva.';
    return false;
  }

  if (!mensaje && soloSuscripcion) {
    mensajeEl.value = '(Sin mensaje — solo desea recibir información nueva sobre la propuesta.)';
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
