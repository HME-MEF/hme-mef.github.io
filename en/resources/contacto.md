---
layout: page
lang: en
title: "Contact"
---

This space is open to anyone who wants to leave **feedback**: from
positive comments to suggestions for improvement or observations about the
project's methodology or legal framework; **report a relevant regulation,
or a judicial or administrative action** not yet included on the site (see
[Advocacy]({{ '/en/advocacy/' | relative_url }}) and
[News]({{ '/en/news/' | relative_url }})); or **propose a
collaboration** — including contributing cost data, professional
testimony, or data to calculate the MEF for another profession or trade
not yet covered by the [tools]({{ '/en/tools/' | relative_url }}) —.
You can also tick the form's checkbox to **receive updates about the
proposal** (regulatory news, publications, advocacy progress) by leaving
your email.

<div style="margin:24px 0; max-width:640px;">
  <form id="contact-form" onsubmit="return enviarContacto(event)">
    <input type="hidden" name="access_key" value="7ac3388f-0bd5-4965-bd7c-6009c1386d44">
    <input type="hidden" name="subject" value="New message — HME/MEF contact form">
    <input type="hidden" name="from_name" value="hme-mef.github.io">
    <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">

    <label for="c-tipo" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Reason for your message</label>
    <select id="c-tipo" name="motivo" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">
      <option value="" selected disabled>— Select a reason —</option>
      <option value="Feedback or comments on the site and the proposal (including positive comments, improvements, legal framework or methodology)">Feedback or comments on the site and the proposal (including positive comments, improvements, legal framework or methodology)</option>
      <option value="Reporting a relevant regulation, or a judicial or administrative action not yet included on the site">Reporting a relevant regulation, or a judicial or administrative action not yet included on the site</option>
      <option value="Collaboration proposal (contributing cost data, professional testimony, or to calculate MEF for another profession or trade, etc.)">Collaboration proposal (contributing cost data, professional testimony, or to calculate MEF for another profession or trade, etc.)</option>
      <option value="Press / media">Press / media</option>
      <option value="Other">Other</option>
    </select>

    <label for="c-nombre" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Name (optional)</label>
    <input type="text" id="c-nombre" name="nombre" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <label for="c-email" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Your email <span id="c-email-req-note">(optional, so we can reply)</span></label>
    <input type="email" id="c-email" name="email" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px;">

    <div style="margin-bottom:14px; padding:10px 12px; background:#f4f6f8; border-radius:6px;">
      <label for="c-suscripcion" style="display:flex; align-items:flex-start; gap:8px; font-size:13px; cursor:pointer; font-weight:400;">
        <input type="checkbox" id="c-suscripcion" name="suscripcion" value="Yes, wants to receive updates about the HME/MEF proposal" style="margin-top:3px;">
        <span>I want to receive updates about the proposal (regulatory news, publications, advocacy progress). Requires leaving your email above.</span>
      </label>
      <div style="font-size:11.5px; color:#7f8c8d; margin-top:6px; margin-left:24px;">
        Your email will be used only to send you these updates, manually by the project's author (there is no automated mailing list). You can unsubscribe at any time by replying to any message.
      </div>
    </div>

    <label for="c-mensaje" style="display:block; font-weight:600; font-size:13px; margin-bottom:4px;">Message</label>
    <textarea id="c-mensaje" name="mensaje" rows="7" style="width:100%; padding:9px 10px; border:1px solid #c7ccd1; border-radius:5px; font-size:14px; margin-bottom:14px; font-family:inherit;" placeholder="If you only want to subscribe to updates, you can leave this field blank."></textarea>

    <button type="submit" id="contact-submit" style="background:#1F3864; color:#fff; border:none; padding:12px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer;">
      Send message
    </button>
    <div id="contact-status" style="font-size:13px; margin-top:10px;"></div>
    <div style="font-size:12px; color:#7f8c8d; margin-top:8px;">
      The message is sent directly to the project's author via
      <a href="https://web3forms.com/" target="_blank" rel="noopener">Web3Forms</a>.
      This site does not store your data; Web3Forms processes the submission
      only to forward it by email.
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
        emailNote.textContent = '(required so we can send you updates)';
      } else {
        emailInput.removeAttribute('required');
        emailNote.textContent = '(optional, so we can reply)';
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
    status.textContent = 'Please write a message before sending.';
    return false;
  }

  if (soloSuscripcion && !email) {
    status.style.color = '#a3261a';
    status.textContent = 'Please leave your email so we can send you updates.';
    return false;
  }

  if (!mensaje && soloSuscripcion) {
    mensajeEl.value = '(No message — just wants to receive updates about the proposal.)';
  }

  btn.disabled = true;
  btn.textContent = 'Sending…';
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
      status.textContent = '✅ Message sent. Thank you — you will get a reply as soon as possible.';
      form.reset();
      btn.textContent = 'Send message';
      btn.disabled = false;
    } else {
      throw new Error(json.message || 'Unknown error');
    }
  })
  .catch(function(err){
    status.style.color = '#a3261a';
    status.textContent = 'The message could not be sent. Please try again in a few minutes.';
    btn.textContent = 'Send message';
    btn.disabled = false;
  });

  return false;
}
</script>

---

**Published**: September 2026 · **Last updated**: October 2026
