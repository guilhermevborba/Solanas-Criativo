/* Solanas — comportamento. Conteúdo editável: CONFIG, PROJECTS e CLIENTS no topo. */
document.documentElement.classList.add('js');
/* ===== Conteúdo editável ===== */
const CONFIG = { email: "solanas.criativo@gmail.com", whatsapp: "5551980130077", instagram: "solanas.criativo" };
const PROJECTS = [ // ordem do array = ordem na página. featured:true destaca. cover/images/videos: caminhos dos arquivos reais
    {
        slug: "eat-kitchen", brand: "EAT Kitchen", tone: "yellow", featured: true,
        segment: "Gastronomia"
    },
    {
        slug: "gabi-angonese", brand: "Gabi Angonese", tone: "blue",
        segment: "Arquitetura"
    },
    {
        slug: "reveillon-punta", brand: "Réveillon Punta", tone: "orange",
        segment: "Eventos"
    },
    {
        slug: "sulina", brand: "Sulina Iluminações", tone: "green",
        segment: "Iluminação"
    },
    {
        slug: "unnie-obras", brand: "Unnie Obras", tone: "pink",
        segment: "Gestão de Obras"
    },
    {
        slug: "resi-atelier", brand: "re.sí ateliê", tone: "black", featured: true,
        segment: "Moda"
    }
].map(p => ({ segment: "[segmento — confirmar]", service: "[tipo de trabalho — confirmar]", cover: null, images: [], videos: [], description: "", ...p }));

const CLIENTS = ["@eusouoabu", "@dilingeries", "@drclaudioalba", "@eatkitchengram", "@elisgarcezinteriores", "@arquiteta_elisa_martins", "@essenciadocuidarestetica", "@gabiangonese", "@gabrielamarkus", "@nathaliahoffmann", "@paulamaltz.adv", "@petitroyal.store", "@re.si.atelie", "@reveillonpunta", "@rimaz.arqdesign", "@smconcept", "@sulinailuminacao", "@unnieobras", "@vdc.advogados", "@zaninicarnes"];
/* ===== Utilidades ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches, touch = matchMedia('(hover:none)').matches;
/* Sóis: três famílias (a,b,c) */
function sun(v, n) {
    const P = (a, r) => [(50 + r * Math.cos(a)).toFixed(1), (50 + r * Math.sin(a)).toFixed(1)]; let s = '';
    if (v == 'a') { const d = []; for (let i = 0; i < n * 2; i++)d.push(P(Math.PI * i / n, i % 2 ? 50 : 98).join(',')); s = `<polygon points="${d.join(' ')}"/>` }
    else if (v == 'b') { s = '<g stroke="currentColor" stroke-width="7" stroke-linecap="round">'; for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n, p = P(a, 46), q = P(a, i % 2 ? 80 : 96); s += `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>` } s += '</g><circle cx="50" cy="50" r="27"/>' }
    else { s = '<circle cx="50" cy="50" r="33"/>'; for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n, w = .13; s += `<polygon points="${P(a - w, 38)} ${P(a, i % 2 ? 76 : 98)} ${P(a + w, 38)}"/>` } }
    return `<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">${s}</svg>`
}
/* Portfólio */

/* Portfólio */
$('#grid').innerHTML = PROJECTS.map((p, i) => {
    const bg = `var(--solanas-${p.tone})`;
    const media = p.videos[0]
        ? `<video data-src="${esc(p.videos[0])}" ${p.cover ? `poster="${esc(p.cover)}"` : ''} muted loop playsinline preload="none" aria-label="Vídeo ${esc(p.brand)}"></video>`
        : p.cover
            ? `<img src="${esc(p.cover)}" alt="Trabalho da Solanas para ${esc(p.brand)}" loading="lazy">`
            : `<i class="sun" data-v="${'abc'[i % 3]}" data-n="${12 + i * 2}"></i><em>[capa do projeto — adicionar]</em>`;
    const segment = p.segment.startsWith('[') ? `<i>${esc(p.segment)}</i>` : esc(p.segment);
    return `<article class="proj l${i % 6}${p.featured ? ' feat' : ''}" style="--t:${bg}" tabindex="0" data-r>
        <div class="ph" ${p.tone == 'black' ? 'style="color:#F1E7DA"' : ''}>${media}</div>
        <h3>${esc(p.brand)}<svg viewBox="0 0 60 24" aria-hidden="true"><use href="#arw" pathLength="1"/></svg></h3>
        <p class="meta">${segment}</p>${p.description ? `<p class="meta">${esc(p.description)}</p>` : ''}
    </article>`;
}).join('');


// $('#grid').innerHTML = PROJECTS.map((p, i) => {
//     const t = p.tone; const bg = `var(--solanas-${t})`;
//     const media = p.videos[0] ? `<video data-src="${esc(p.videos[0])}" ${p.cover ? `poster="${esc(p.cover)}"` : ''} muted loop playsinline preload="none" aria-label="Vídeo ${esc(p.brand)}"></video>`
//         : p.cover ? `<img src="${esc(p.cover)}" alt="Trabalho da Solanas para ${esc(p.brand)}" loading="lazy">`
//             : `<i class="sun" data-v="${'abc'[i % 3]}" data-n="${12 + i * 2}"></i><em>[capa do projeto — adicionar]</em>`;
//     return `<article class="proj l${i % 6}${p.featured ? ' feat' : ''}" style="--t:${bg}" tabindex="0" data-r><div class="ph" ${t == 'black' ? 'style="color:#F1E7DA"' : ''}>${media}</div>
//  <h3>${esc(p.brand)}<svg viewBox="0 0 60 24" aria-hidden="true"><use href="#arw" pathLength="1"/></svg></h3>
//  <p class="meta">${p.segment.startsWith('[') ? `<i>${esc(p.segment)}</i>` : esc(p.segment)} · ${p.service.startsWith('[') ? `<i>${esc(p.service)}</i>` : esc(p.service)}</p>${p.description ? `<p class="meta">${esc(p.description)}</p>` : ''}</article>`
// }).join('')

/* Clientes: lista duplicada para o loop; cópia escondida de leitores de tela */
const lst = a => `<ul${a ? ' aria-hidden="true"' : ''}>${CLIENTS.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
$('#mq').innerHTML = lst(0) + lst(1);
$$('.sun').forEach(e => e.innerHTML = sun(e.dataset.v, +e.dataset.n));
/* Contato / footer */
const fm = $('#fmail'); fm.href = 'mailto:' + CONFIG.email; fm.textContent = CONFIG.email;
if (CONFIG.instagram) $('#finsta').innerHTML = `<a href="https://instagram.com/${esc(CONFIG.instagram)}">@${esc(CONFIG.instagram)}</a>`;
$('#yr').textContent = new Date().getFullYear();
$('#f').onsubmit = e => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.target));
    const t = `Oi, Solanas!

        Quero bater um papo com vocês sobre a minha marca.

        *Meu nome:* ${d.nome}
        *Minha marca:* ${d.marca}
        *Instagram ou site:* ${d.link}
        *Contato:* ${d.contato}

        *Um pouco sobre o que estou buscando:*
        ${d.msg}

        Vamos conversar?`;
    // const t = `Oi, Solanas!\nNome: ${d.nome}\nMarca: ${d.marca}\nInstagram ou site: ${d.link}\nContato: ${d.contato}\n\n${d.msg}`;
    location.href = CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}` : `mailto:${CONFIG.email}?subject=${encodeURIComponent('Vem bater um papo')}&body=${encodeURIComponent(t)}`
};
/* Menu mobile */
const nav = $('#nav'), mb = $('#mb');
mb.onclick = () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Fechar' : 'Menu' };
$$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); mb.setAttribute('aria-expanded', false); mb.textContent = 'Menu' }));
addEventListener('keydown', e => { if (e.key == 'Escape' && nav.classList.contains('open')) mb.click() });
/* Reveal + traços + valores + vídeos (IntersectionObserver) */
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }), { threshold: .15 });
$$('[data-r],.svc').forEach(e => io.observe(e));
setTimeout(() => $$('.hero [data-r]').forEach(e => e.classList.add('in')), 60);
const vio = new IntersectionObserver(es => es.forEach(x => { const v = x.target; if (x.isIntersecting) { if (!v.src && v.dataset.src) v.src = v.dataset.src; v.play && v.play().catch(() => { }) } else v.pause && v.pause() }), { rootMargin: '200px' });
$$('video[data-src]').forEach(v => vio.observe(v));
const vl = new IntersectionObserver(es => es.forEach(x => x.target.classList.toggle('on', x.isIntersecting)), { rootMargin: '-35% 0px -35% 0px' });
$$('#vals li').forEach(l => vl.observe(l));
if (touch) { const pa = new IntersectionObserver(es => es.forEach(x => x.target.classList.toggle('act', x.isIntersecting)), { rootMargin: '-40% 0px -40% 0px' }); $$('.proj').forEach(p => pa.observe(p)) }
/* Traço do processo: curva por entre os números */
const proc = $('#processo'), trace = $('#trace'), steps = $('.steps');
function build() {
    const o = steps.getBoundingClientRect(), W = o.width, H = o.height,
    pts = $$('.step b').map(b => { const r = b.getBoundingClientRect(); return [r.left - o.left + r.width / 2, r.top - o.top + r.height / 2] });
    let d = `M${W * .05} -20`, x = W * .05, y = -20; pts.forEach(([px, py]) => { const m = (y + py) / 2; d += ` C${x} ${m} ${px} ${m} ${px} ${py}`; x = px; y = py });
    d += ` C${x} ${y + H * .06} ${W * .8} ${y + H * .04} ${W * .9} ${y + H * .1}`;
    steps.firstElementChild.setAttribute('viewBox', `0 0 ${W} ${H}`); trace.setAttribute('d', d)
}
/* Scroll: --p por seção, sem layout thrash */
const sc = $$('[data-scroll]'); let raf = 0; const hd = $('#hd'), stick = $('.stick');
function tick() {
    raf = 0; const vh = innerHeight; sc.forEach(e => {
        const r = e.getBoundingClientRect(); if (r.bottom < -vh || r.top > 2 * vh) return;
        let p = e.dataset.scroll == 'stick' ? -r.top / (r.height - vh) : (vh * .85 - r.top) / (r.height + vh * .2); p = Math.min(1, Math.max(0, p));
        e.style.setProperty('--p', p.toFixed(4));
        if (e === proc) trace.style.strokeDashoffset = 1 - p;
        else stick.classList.toggle('dark', p > .42)
    });
    hd.classList.toggle('solid', scrollY > 40)
}
const req = () => raf || (raf = requestAnimationFrame(tick));
addEventListener('scroll', req, { passive: true });
addEventListener('resize', () => { build(); req() });
addEventListener('load', () => { build(); req() }); if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { build(); req() }); build();
if (RM) { sc.forEach(e => e.style.setProperty('--p', 1)); trace.style.strokeDasharray = 'none' } else { trace.style.strokeDasharray = 1; trace.style.strokeDashoffset = 1 }
/* Formas reagem ao mouse (desktop, movimento permitido) */
if (!RM && !touch) {
    const m = $$('[data-m]'); m.forEach(e => e.style.setProperty('--k', e.dataset.m)); const h = $('.hero'); let q = 0;
    h.addEventListener('pointermove', e => { if (q) return; q = requestAnimationFrame(() => { q = 0; h.style.setProperty('--mx', (e.clientX / innerWidth - .5) * 2); h.style.setProperty('--my', (e.clientY / innerHeight - .5) * 2) }) })
}
tick();
