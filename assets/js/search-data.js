// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order. note&amp;#58 * indicates equal contributions. † indicates that the author ordering is alphabetical.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-join-gregory-wornell-s-group-at-mit-as-a-postdoc-this-fall",
          title: 'I will join Gregory Wornell’s group at MIT as a postdoc this fall....',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-thesis",
          title: 'I successfully defended my thesis!',
          description: "",
          section: "News",},{id: "news-i-presented-my-recent-work-on-decomposing-linear-operators-with-neural-networks-at-mltea-talk",
          title: 'I presented my recent work on decomposing linear operators with neural networks at...',
          description: "",
          section: "News",},{id: "news-i-will-present-a-poster-on-decomposing-linear-operators-with-neural-networks-at-ml4ps-workshop-neurips-2023-the-extended-abstract-can-be-found-here",
          title: 'I will present a poster on decomposing linear operators with neural networks at...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-our-recent-work-neuralsvd-at-ita-workshop",
          title: 'I gave a talk on our recent work NeuralSVD at ITA workshop.',
          description: "",
          section: "News",},{id: "news-one-paper-on-learning-with-fairness-under-uncertainty-accepted-at-isit-2024",
          title: 'One paper on learning with fairness under uncertainty accepted at ISIT 2024!',
          description: "",
          section: "News",},{id: "news-two-papers-one-spotlight-top-3-5-and-one-poster-accepted-at-icml-2024",
          title: 'Two papers, one Spotlight (top 3.5%) and one poster, accepted at ICML 2024!...',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-ieee-transactions-on-information-theory",
          title: 'One paper accepted at IEEE Transactions on Information Theory!',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-at-neurips-2024",
          title: 'One paper accepted at NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-in-this-fall-i-have-given-talks-on-neuralsvd-at-merl-kaist-kias-and-flatiron-institute",
          title: 'In this fall, I have given talks on NeuralSVD at MERL, KAIST, KIAS,...',
          description: "",
          section: "News",},{id: "news-two-papers-one-spotlight-top-2-6-and-one-poster-accepted-at-icml-2025-and-one-paper-accepted-at-colt-2025",
          title: 'Two papers, one Spotlight (top 2.6%) and one poster, accepted at ICML 2025,...',
          description: "",
          section: "News",},{id: "news-two-papers-1-2-on-parametric-spectral-decomposition-got-accepted-at-neurips-2025-update-on-10-17-2025-also-recognized-as-a-top-reviewer",
          title: 'Two papers [1, 2] on parametric spectral decomposition got accepted at NeurIPS 2025!...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-off-policy-contextual-bandits-at-the-rl-theory-seminar-video-slides",
          title: 'I gave a talk on off-policy contextual bandits at the RL Theory Seminar:...',
          description: "",
          section: "News",},{id: "projects-neural-spectral-methods",
          title: 'neural spectral methods',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/neural-spectral-methods/";
            },},{id: "projects-probabilistic-and-generative-modeling",
          title: 'probabilistic and generative modeling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/probabilistic-modeling/";
            },},{id: "projects-uncertainty-quantification",
          title: 'uncertainty quantification',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/uncertainty-quantification/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_jongha.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%6E%67%68%61.%72%79%75@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jongharyu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jongha-ryu-997ba7a7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5ZYeWgcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
