---
layout: page
title: "Contacto"
---

# Contacto

Este espacio está abierto a quien quiera **proponer una colaboración**,
**informar de una actuación administrativa o judicial similar** a las
recogidas en [Advocacy]({{ '/advocacy/' | relative_url }}) (dumping en
concurso público, litigios, quejas ante el Defensor del Pueblo, criterios
de otras administraciones), o simplemente hacer una observación sobre la
metodología o el marco legal del proyecto.

<div style="margin:24px 0; max-width:640px;">
  <form id="contact-form" onsubmit="return enviarContacto(event)">

    <label for="c-tipo" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Motivo del mensaje</label>
    <select id="c-tipo" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">
      <option value="Propuesta de colaboracion">Propuesta de colaboración</option>
      <option value="Actuacion similar (dumping, litigio, queja)">Informar de una actuación administrativa o judicial similar</option>
      <option value="Datos de costes o testimonio">Aportar datos de costes o testimonio profesional</option>
      <option value="Comentario sobre marco legal o metodologia">Comentario sobre el marco legal o la metodología</option>
      <option value="Prensa">Prensa / medios</option>
      <option value="Otro">Otro</option>
    </select>

    <label for="c-nombre" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Nombre (opcional)</label>
    <input type="text" id="c-nombre" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-email" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Tu email (opcional, para poder responderte)</label>
    <input type="email" id="c-email" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-mensaje" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Mensaje</label>
    <textarea id="c-mensaje" rows="7" required style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px; font-family:inherit;"></textarea>

    <button type="submit" style="background:#1F3864; color:#fff; border:none; padding:12px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer;">
      Enviar por email
    </button>
    <div style="font-size:12px; color:#7f8c8d; margin-top:8px;">
      Al enviar se abrirá tu programa de correo con un mensaje ya redactado a
      <a href="mailto:{{ site.author_email }}">{{ site.author_email }}</a>,
      para que lo revises y lo envíes tú mismo. Este sitio no recoge ni
      almacena el contenido del formulario.
    </div>
  </form>
</div>

---

También puedes escribir directamente a
📧 [{{ site.author_email }}](mailto:{{ site.author_email }}).

- **Académicos**: citas, referencias, análisis complementarios.
- **Profesionales**: datos de costes, testimonios de dumping, casos similares al de Ripollet/Santa Margarida.
- **Administraciones**: colaboración técnica, criterios comparables de otras comunidades o países.
- **Medios**: difusión de la propuesta.

<script>
function enviarContacto(e){
  e.preventDefault();
  var tipo = document.getElementById('c-tipo').value;
  var nombre = document.getElementById('c-nombre').value.trim();
  var email = document.getElementById('c-email').value.trim();
  var mensaje = document.getElementById('c-mensaje').value.trim();

  var subject = 'HME/MEF — ' + tipo;
  var body = mensaje;
  if (nombre) body += '\n\n— ' + nombre;
  if (email) body += (nombre ? ' (' + email + ')' : '\n\nEmail de contacto: ' + email);

  var mailto = 'mailto:{{ site.author_email }}'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);

  window.location.href = mailto;
  return false;
}
</script>

---

**Última actualización**: Septiembre 2026
</content>
