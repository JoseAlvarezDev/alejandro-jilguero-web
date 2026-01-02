import './style.css'

// 1. Translations Configuration
const translations = {
  es: {
    nav: {
      books: "Libros",
      about: "Sobre Mí",
      contact: "Contacto"
    },
    hero: {
      subtitle: "El Arte de la Narrativa",
      title: "Historias que desafían<br>el tiempo y la memoria.",
      cta: "Descubrir Obras"
    },
    book: {
      label: "Último Lanzamiento",
      title: "El Susurro del Tiempo",
      genre: "Misterio | Histórica | 2025",
      desc: "En las calles empedradas de un París olvidado, un relojero descubre un mecanismo capaz de detener el dolor, pero a un precio terrible. Una novela sobre la pérdida, la obsesión y los secretos que guardamos bajo llave."
    },
    about: {
      title: "Alejandro Jilguero",
      p1: "Nacido entre dos culturas, Alejandro teje historias que cruzan fronteras lingüísticas y emocionales. Su estilo, a menudo descrito como 'prosa cinematográfica', busca la belleza en la oscuridad y la esperanza en la tragedia.",
      p2: "Cuando no está escribiendo, se le puede encontrar perdiéndose en librerías antiguas o buscando la taza de café perfecta en alguna ciudad europea."
    },
    contact: {
      title: "Mantente al día",
      desc: "Suscríbete para recibir noticias, fechas de firmas y capítulos exclusivos.",
      btn: "Suscribirse"
    }
  },
  fr: {
    nav: {
      books: "Livres",
      about: "À Propos",
      contact: "Contact"
    },
    hero: {
      subtitle: "L'Art de la Narration",
      title: "Des histoires qui défient<br>le temps et la mémoire.",
      cta: "Découvrir les Œuvres"
    },
    book: {
      label: "Dernière Sortie",
      title: "Le Murmure du Temps",
      genre: "Mystère | Historique | 2025",
      desc: "Dans les rues pavées d'un Paris oublié, un horloger découvre un mécanisme capable d'arrêter la douleur, mais à un prix terrible. Un roman sur la perte, l'obsession et les secrets que nous gardons sous clé."
    },
    about: {
      title: "Alejandro Jilguero",
      p1: "Né entre deux cultures, Alejandro tisse des histoires qui traversent les frontières linguistiques et émotionnelles. Son style, souvent décrit comme une 'prose cinématographique', cherche la beauté dans l'obscurité et l'espoir dans la tragédie.",
      p2: "Quand il n'écrit pas, on peut le trouver en train de se perdre dans de vieilles librairies ou à la recherche de la tasse de café parfaite dans une ville européenne."
    },
    contact: {
      title: "Restez à jour",
      desc: "Abonnez-vous pour recevoir des nouvelles, des dates de signature et des chapitres exclusifs.",
      btn: "S'abonner"
    }
  }
};

// 2. Language Logic
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'es';

function updateContent(lang) {
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let content = translations[lang];

    // Dive into the object (e.g., hero.title)
    keys.forEach(k => {
      if (content) content = content[k];
    });

    if (content) {
      el.innerHTML = content; // using innerHTML to allow <br> tags
    }
  });

  // Update active button state
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

// Event Listeners for Buttons
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    currentLang = lang;
    updateContent(lang);
  });
});

// 3. Scroll Effect for Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initial load
updateContent(currentLang);
