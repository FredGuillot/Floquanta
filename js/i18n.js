(() => {
  const storageKey = 'floquanta-language';
  const translations = {
    en: {
      meta: { title: "Floquanta — Explore what's possible", description: 'Quantitative models and simulation for decisions under uncertainty.' },
      a11y: { skip: 'Skip to main content', home: 'Floquanta home', language: 'Language', primaryNav: 'Primary navigation', mobileNav: 'Mobile navigation', footerNav: 'Footer navigation', flow: 'A business is represented by a focused model, which produces simulated futures', stores: 'App stores', menu: 'Menu', email: 'Email Floquanta about a decision worth exploring' },
      nav: { menu: 'Menu', approach: 'Approach', capabilities: 'Capabilities', applications: 'Applications', about: 'About', talk: "Let's Talk" },
      hero: { label: 'Decision intelligence', title: "Explore what's<br>possible.", subhead: 'Quantitative models and simulation for decisions under uncertainty.', intro: 'Floquanta builds simplified mathematical representations of complex business systems to explore possible futures and understand the consequences of decisions.', cta: 'Explore Floquanta', manifesto: "We don't model everything.<br><strong>We model what matters.</strong>" },
      diagram: { decision: 'Decision', uncertainty: 'Uncertainty', futures: 'Possible futures' },
      approach: { label: 'Our Approach', title: 'Complex systems.<br><em>Simplified models.</em>', copy: 'A useful model does not need to reproduce an entire organization. It needs to capture the variables, relationships and uncertainties that matter to the decision.', complexSystem: 'Complex system', relevantModel: 'Relevant model', frame: 'Frame', frameCopy: 'Start with the decision, not the model.', simplify: 'Simplify', simplifyCopy: 'Identify the smallest useful representation.', simulate: 'Simulate', simulateCopy: 'Propagate uncertainty through thousands of possible futures.', explore: 'Explore', exploreCopy: 'Compare scenarios and understand their consequences.', refine: 'Refine', refineCopy: 'Improve the model iteratively as new information, questions and decisions emerge.', closing: 'Model only what matters to the decision.' },
      twins: { label: 'Decision Twins', title: 'A lightweight quantitative<br>representation of your business.', copy: 'Connect financial, operational and risk variables in a parsimonious model designed around a specific question.', business: 'Business', businessItems: 'Revenues · Costs · Operations', model: 'Model', modelItems: 'Relationships · Uncertainty', futures: 'Futures', futureItems: 'Simulation · Scenarios', base: 'Base case', baseCopy: 'Expected evolution', stress: 'Stress', stressCopy: 'Largest customer leaves', decision: 'Decision', decisionCopy: 'Invest $2M today', note: 'Not a massive digital twin.', noteCopy: 'A focused model built to answer the questions that truly matter.' },
      cap: { label: 'Capabilities', title: 'From uncertainty to insight.', quant: 'Quantitative Modeling', quantCopy: 'Simplified mathematical representations of complex business systems.', sim: 'Simulation & Scenario Analysis', simCopy: 'Explore possible futures and compare alternative decisions.', dfa: 'Dynamic Financial Analysis', dfaCopy: 'Connect operational, financial and risk drivers dynamically.', risk: 'Risk & Uncertainty Modeling', riskCopy: 'Model variability, dependencies and tail outcomes.', twins: 'Decision Twins', twinsCopy: 'Focused digital representations designed around a decision.', ai: 'Applied AI & Analytics', aiCopy: 'Use AI where it improves modeling, exploration or interpretation.' },
      apps: { title: 'Questions worth modeling.', copy: 'Floquanta starts with a financial question and develops the model only as far as the decision requires.', q1: 'What if our largest customer leaves?', q2: 'What if costs rise faster than revenue?', q3: 'How fast can we grow without putting liquidity under pressure?', q4: 'How resilient is our liquidity under stress?', q5: 'Which uncertainties actually drive our outcome?', types: 'Financial <i>·</i> Operational <i>·</i> Risk <i>·</i> Strategic' },
      personal: { title: 'The same philosophy,<br>made personal.', copy: 'Floquanta Personal is a free consumer application that demonstrates the Floquanta approach: start with a plan, explore scenarios, and understand possible financial futures.', copy2: 'It helps people explore possible financial futures.', soon: 'Coming soon', note: 'A separate consumer application, sharing the same modeling philosophy.', imageAlt: 'Floquanta Personal forecast screen showing a balance trajectory over time' },
      about: { label: 'About Floquanta', title: 'Mathematical thinking.<br>Practical decisions.', copy: 'Floquanta combines mathematical modeling, actuarial approaches, simulation, analytics and modern technology to help organizations better understand their complex systems and uncertain futures.' },
      contact: { title: 'Have a decision worth exploring?', copy: "Let's build the simplest useful model around it." },
      footer: { tagline: 'Complex systems. Simplified models.', privacy: 'Privacy', terms: 'Terms' },
      emailSubject: 'Floquanta — Decision worth exploring'
    },
    fr: {
      meta: { title: 'Floquanta — Explorer les possibilités', description: "Modèles quantitatifs et simulation pour de meilleures décisions en contexte d'incertitude." },
      a11y: { skip: 'Passer au contenu principal', home: 'Accueil de Floquanta', language: 'Langue', primaryNav: 'Navigation principale', mobileNav: 'Navigation mobile', footerNav: 'Navigation du pied de page', flow: 'Une organisation est représentée par un modèle ciblé qui produit des futurs simulés', stores: "Boutiques d'applications", menu: 'Menu', email: 'Envoyer un courriel à Floquanta au sujet d’une décision à explorer' },
      nav: { menu: 'Menu', approach: 'Approche', capabilities: 'Capacités', applications: 'Applications', about: 'À propos', talk: 'Parlons-en' },
      hero: { label: 'Intelligence décisionnelle', title: 'Explorer les possibilités', subhead: "Modèles quantitatifs et simulation pour de meilleures décisions en contexte d'incertitude.", intro: "Floquanta construit des représentations mathématiques simplifiées de systèmes d'affaires complexes afin d'explorer des futurs possibles et de comprendre les conséquences des décisions.", cta: 'Découvrir Floquanta', manifesto: 'Nous ne modélisons pas tout.<br><strong>Nous modélisons ce qui compte.</strong>' },
      diagram: { decision: 'Décision', uncertainty: 'Incertitude', futures: 'Futurs possibles' },
      approach: { label: 'Notre approche', title: 'Systèmes complexes.<br><em>Modèles simplifiés.</em>', copy: "Un modèle utile n'a pas besoin de reproduire une organisation entière. Il doit représenter les variables, les relations et les incertitudes qui comptent pour la décision.", complexSystem: 'Système complexe', relevantModel: 'Modèle pertinent', frame: 'Définir', frameCopy: 'Commencer par la décision, pas par le modèle.', simplify: 'Simplifier', simplifyCopy: 'Identifier la plus petite représentation utile.', simulate: 'Simuler', simulateCopy: "Propager l'incertitude à travers des milliers de futurs possibles.", explore: 'Explorer', exploreCopy: 'Comparer les scénarios et comprendre leurs conséquences.', refine: 'Affiner', refineCopy: 'Améliorer le modèle de façon itérative à mesure que de nouvelles informations, questions et décisions émergent.', closing: 'Ne modéliser que ce qui compte pour la décision.' },
      twins: { label: 'Jumeaux décisionnels', title: 'Une représentation quantitative légère<br>de votre organisation.', copy: 'Relier les variables financières, opérationnelles et de risque dans un modèle parcimonieux conçu autour d’une question précise.', business: 'Organisation', businessItems: 'Revenus · Coûts · Opérations', model: 'Modèle', modelItems: 'Relations · Incertitude', futures: 'Futurs', futureItems: 'Simulation · Scénarios', base: 'Scénario de base', baseCopy: 'Évolution attendue', stress: 'Stress', stressCopy: 'Départ du plus important client', decision: 'Décision', decisionCopy: "Investir 2 M$ aujourd'hui", note: 'Pas un jumeau numérique massif.', noteCopy: 'Un modèle ciblé conçu pour répondre aux questions qui comptent vraiment.' },
      cap: { label: 'Capacités', title: "De l'incertitude à la compréhension.", quant: 'Modélisation quantitative', quantCopy: "Représentations mathématiques simplifiées de systèmes d'affaires complexes.", sim: 'Simulation et analyse de scénarios', simCopy: 'Explorer des futurs possibles et comparer différentes décisions.', dfa: 'Analyse financière dynamique', dfaCopy: 'Relier dynamiquement les facteurs opérationnels, financiers et de risque.', risk: "Modélisation du risque et de l'incertitude", riskCopy: 'Modéliser la variabilité, les dépendances et les résultats extrêmes.', twins: 'Jumeaux décisionnels', twinsCopy: 'Représentations numériques ciblées conçues autour d’une décision.', ai: 'IA appliquée et analytique', aiCopy: "Utiliser l'IA lorsqu'elle améliore la modélisation, l'exploration ou l'interprétation." },
      apps: { title: "Des questions qui méritent d'être modélisées.", copy: "Floquanta part d'une question financière et élabore le modèle seulement jusqu'au niveau requis par la décision.", q1: 'Que se passe-t-il si notre plus important client nous quitte?', q2: 'Que se passe-t-il si les coûts augmentent plus rapidement que les revenus?', q3: 'À quelle vitesse pouvons-nous croître sans mettre notre liquidité sous pression?', q4: 'À quel point notre liquidité résiste-t-elle à un scénario de stress?', q5: 'Quelles incertitudes influencent réellement nos résultats?', types: 'Financier <i>·</i> Opérationnel <i>·</i> Risque <i>·</i> Stratégique' },
      personal: { title: 'La même philosophie pour vos finances personnelles.', copy: "Floquanta Personal est une application gratuite destinée au grand public qui illustre l'approche Floquanta : partir d'un plan, explorer des scénarios et comprendre différents futurs financiers possibles.", copy2: 'Elle aide les gens à explorer des futurs financiers possibles.', soon: 'Bientôt disponible', note: 'Une application grand public distincte qui partage la même philosophie de modélisation.', imageAlt: "Écran de prévision de Floquanta Personal montrant l'évolution du solde dans le temps" },
      about: { label: 'À propos de Floquanta', title: 'Rigueur mathématique.<br>Décisions concrètes.', copy: "Floquanta combine la modélisation mathématique, les approches actuarielles, la simulation, l'analytique et les technologies modernes afin d'aider les organisations à mieux comprendre leurs systèmes complexes et leurs futurs incertains." },
      contact: { title: "Une décision mérite d'être explorée?", copy: 'Construisons le modèle utile le plus simple autour de cette décision.' },
      footer: { tagline: 'Systèmes complexes. Modèles simplifiés.', privacy: 'Confidentialité', terms: 'Conditions' },
      emailSubject: 'Floquanta — Une décision à explorer'
    }
  };

  const getValue = (language, key) => key.split('.').reduce((value, part) => value?.[part], translations[language]);

  function savedLanguage() {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === 'en' || saved === 'fr' ? saved : null;
    } catch {
      return null;
    }
  }

  function setLanguage(language, { persist = true } = {}) {
    const selected = language === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = selected;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = getValue(selected, element.dataset.i18n);
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = getValue(selected, element.dataset.i18nHtml);
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = getValue(selected, element.dataset.i18nAlt);
      if (value !== undefined) element.alt = value;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const value = getValue(selected, element.dataset.i18nAriaLabel);
      if (value !== undefined) element.setAttribute('aria-label', value);
    });

    document.title = translations[selected].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[selected].meta.description);
    document.querySelectorAll('.language-switcher').forEach((group) => group.setAttribute('aria-label', translations[selected].a11y.language));
    document.querySelector('#site-nav')?.setAttribute('aria-label', translations[selected].a11y.primaryNav);
    document.querySelector('#mobile-nav')?.setAttribute('aria-label', translations[selected].a11y.mobileNav);
    document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === selected)));

    const mailto = `mailto:contact@floquanta.com?subject=${encodeURIComponent(translations[selected].emailSubject)}`;
    document.querySelectorAll('[data-mailto]').forEach((link) => {
      link.href = mailto;
      link.setAttribute('aria-label', translations[selected].a11y.email);
    });

    if (persist) {
      try { localStorage.setItem(storageKey, selected); } catch { /* Preference storage may be unavailable. */ }
    }

    document.dispatchEvent(new CustomEvent('floquanta:languagechange', { detail: { language: selected } }));
  }

  const initialLanguage = savedLanguage() || (navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en');
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  setLanguage(initialLanguage, { persist: false });

  window.FloquantaI18n = { setLanguage, getLanguage: () => document.documentElement.lang };
})();
