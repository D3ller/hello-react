import type { JobBoardItem } from "@features/company/components/JobBoardCard.tsx";
import type { Company } from "../../../type.ts";
import { companyPresentations } from "./company-presentations.ts";
import { companyFacts } from "./company-facts.ts";

type CompanyProfile = {
    facts: Array<{ label: string; value: string; icon: string }>;
    presentation: string;
    socialLinks: Array<{ label: string; url: string; icon: string }>;
};

const factIcons: Record<string, string> = {
    "Siège de l'entreprise": "heroicons:building-office-20-solid",
    "Année de fondation": "heroicons:flag-20-solid",
    "Chiffre d'affaires": "heroicons:banknotes-20-solid",
    "Salariés": "heroicons:users-20-solid",
    "Politique de télétravail": "heroicons:home-modern-20-solid",
    "Ancienneté moyenne": "heroicons:calendar-days-20-solid",
    "Moyenne d'âge": "heroicons:user-group-20-solid",
    "Répartition H/F": "heroicons:scale-20-solid",
    "Index de parité": "heroicons:scale-20-solid"
};

const createProfile = (presentation: string, facts: Record<string, string>, socialLinks: CompanyProfile["socialLinks"] = []): CompanyProfile => ({
    presentation,
    facts: Object.entries(facts).map(([label, value]) => ({label, value, icon: factIcons[label]})),
    socialLinks: socialLinks.slice(0, 3)
});

const companyProfiles: Record<string, CompanyProfile> = {
    anacours: createProfile("Spécialiste du soutien scolaire depuis plus de 25 ans, Anacours accompagne chaque année près de 19 000 élèves partout en France. L’entreprise propose des cours particuliers à domicile, des stages intensifs et un suivi pédagogique adapté aux besoins de chaque élève, du primaire aux études supérieures. Son approche repose sur la création d’un véritable tandem entre l’enseignant et l’élève. Les équipes sélectionnent les intervenants pour leurs connaissances, leur pédagogie et leur capacité d’écoute, puis les accompagnent tout au long de leurs missions.", {"Siège de l'entreprise": "Clichy - 92", "Année de fondation": "1999", "Chiffre d'affaires": "10 Millions d'euros", "Salariés": "50 à 250", "Politique de télétravail": "Pas de télétravail", "Ancienneté moyenne": "3 ans", "Moyenne d'âge": "39 ans", "Répartition H/F": "44% - 56%"}),
    vitalliance: createProfile("Depuis 2003, Vitalliance accompagne à domicile les personnes âgées et les personnes en situation de handicap. Ses équipes interviennent tous les jours afin de préserver l’autonomie, le confort et la qualité de vie de chaque bénéficiaire. Présente dans toute la France à travers un vaste réseau d’agences, l’entreprise réunit plusieurs milliers de collaborateurs. Elle mise sur la proximité, la formation et un suivi personnalisé pour construire des prestations adaptées aux besoins de chaque personne et de sa famille.", {"Siège de l'entreprise": "Courbevoie - 92", "Année de fondation": "2003", "Chiffre d'affaires": "102,69 Millions d'euros", "Salariés": "5000 à 10 000", "Politique de télétravail": "Pas de télétravail", "Ancienneté moyenne": "3 ans", "Moyenne d'âge": "36 ans", "Répartition H/F": "30% - 70%"}),
    ouihelp: createProfile("Ouihelp accompagne les personnes âgées ou en perte d’autonomie afin qu’elles puissent continuer à vivre chez elles dans les meilleures conditions. L’entreprise organise des prestations d’aide à domicile personnalisées et s’appuie sur des équipes locales pour rester proche des bénéficiaires et de leurs familles. Son projet associe impact social, exigence de qualité et outils numériques. Les collaborateurs bénéficient d’un environnement dynamique, d’un parcours d’intégration structuré et de possibilités d’évolution au sein d’un réseau d’agences en forte croissance.", {"Siège de l'entreprise": "Paris - 75", "Année de fondation": "2016", "Salariés": "250 à 1000", "Politique de télétravail": "Partiel possible", "Index de parité": "100 / 100"}, [{label: "Facebook", url: "https://www.facebook.com/ouihelp/", icon: "mdi:facebook"}, {label: "X", url: "https://x.com/ouihelp", icon: "mdi:twitter"}]),
    "lna-sante": createProfile("LNA Santé est un acteur global de santé présent en France, en Belgique et en Pologne. Le groupe rassemble plus de 90 établissements spécialisés dans les maisons de retraite médicalisées, les cliniques, la santé mentale, l’hospitalisation à domicile et les soins de réadaptation. Ses milliers de professionnels exercent plus d’une centaine de métiers au service des patients et des résidents. L’entreprise développe une culture fondée sur le soin, le travail collectif, la proximité managériale, la formation et l’amélioration continue des conditions d’accompagnement.", {"Siège de l'entreprise": "Nantes - 44", "Année de fondation": "1990", "Chiffre d'affaires": "878 Millions d'euros", "Salariés": "5000 à 10 000", "Politique de télétravail": "Occasionnel possible", "Ancienneté moyenne": "5 ans", "Moyenne d'âge": "39 ans", "Index de parité": "92 / 100", "Répartition H/F": "17% - 83%"}),
    "saur-europe": createProfile("Saur accompagne les collectivités et les industriels dans la gestion responsable de l’eau. Le groupe produit et distribue l’eau potable, traite les eaux usées et développe des solutions d’ingénierie destinées à préserver une ressource essentielle soumise à des pressions croissantes. Présentes en France et à l’international, ses équipes réunissent des métiers techniques, scientifiques, opérationnels et commerciaux. Leur objectif commun consiste à garantir la continuité du service, améliorer la performance des installations et inventer des modèles plus sobres pour les territoires.", {"Siège de l'entreprise": "Issy-les-Moulineaux - 92", "Année de fondation": "1933", "Chiffre d'affaires": "1,40 Milliard d'euros", "Salariés": "> 10 000", "Politique de télétravail": "Partiel possible", "Ancienneté moyenne": "8 ans", "Moyenne d'âge": "41 ans", "Index de parité": "99 / 100", "Répartition H/F": "70% - 30%"}),
    "groupe-adf": createProfile("Groupe ADF accompagne depuis plus de soixante ans les industriels dans la performance et la pérennité de leurs installations. Ses équipes interviennent dans l’ingénierie, la maintenance, les travaux, la production et les services techniques sur des sites aux exigences élevées. Le groupe travaille notamment dans l’énergie, l’aéronautique, la défense, la mobilité, la chimie et les sciences de la vie. Il développe les compétences de ses collaborateurs et encourage l’innovation afin de proposer des solutions fiables, sûres et adaptées aux enjeux de chaque client.", {"Siège de l'entreprise": "Vitrolles - 13", "Année de fondation": "1962", "Chiffre d'affaires": "682 Millions d'euros", "Salariés": "5000 à 10 000", "Politique de télétravail": "Occasionnel possible", "Ancienneté moyenne": "5 ans et plus", "Moyenne d'âge": "40 ans", "Répartition H/F": "84% - 16%"}),
    "local-fr": createProfile("Local.fr accompagne depuis 1984 les artisans, commerçants, professions libérales et petites entreprises dans leur communication numérique. Ses équipes conçoivent des sites internet, développent la visibilité locale et proposent des solutions destinées à générer du trafic et de nouveaux contacts commerciaux. Présente dans plusieurs régions, l’entreprise combine une force commerciale de terrain avec des métiers du web, du référencement, de la création et de la relation client. Elle met en avant la proximité, la transparence, la performance et l’esprit d’équipe.", {"Siège de l'entreprise": "Bourg-en-Bresse - 01", "Année de fondation": "1984", "Chiffre d'affaires": "51 Millions d'euros", "Salariés": "250 à 1000", "Politique de télétravail": "Partiel possible", "Ancienneté moyenne": "5 ans", "Moyenne d'âge": "38 ans", "Index de parité": "87 / 100"}),
    "tecnomat-ex-bricoman": createProfile("Tecnomat, anciennement Bricoman, accompagne les professionnels du bâtiment dans leurs projets de construction et de rénovation. L’enseigne propose des matériaux, des produits techniques et des services conçus pour répondre aux contraintes de disponibilité, de prix et de rapidité des chantiers. Membre du groupe Adeo, l’entreprise s’appuie sur des équipes présentes en magasin, dans la logistique et au siège. La connaissance des produits, le conseil aux professionnels et la capacité à trouver des solutions concrètes occupent une place centrale dans ses métiers.", {"Siège de l'entreprise": "Villeneuve-d'Ascq - 59", "Année de fondation": "1998", "Chiffre d'affaires": "775 Millions d'euros", "Salariés": "1000 à 5000", "Politique de télétravail": "Partiel possible", "Ancienneté moyenne": "5 ans", "Moyenne d'âge": "38 ans", "Index de parité": "94 / 100", "Répartition H/F": "60% - 40%"}),
    "alliance-emploi": createProfile("Alliance Emploi est un groupement d’employeurs qui recrute des salariés puis les met à disposition de ses entreprises adhérentes. Cette organisation apporte une réponse durable aux besoins de recrutement tout en sécurisant les parcours professionnels et en développant les compétences. Présente dans plusieurs bassins d’emploi, l’entreprise travaille avec des secteurs variés et construit des formations adaptées aux métiers en tension. Elle accompagne chaque salarié pendant ses missions et favorise l’employabilité, la mobilité et l’accès à des emplois durables.", {"Siège de l'entreprise": "Marcq-en-Barœul - 59", "Année de fondation": "1998", "Chiffre d'affaires": "70 Millions d'euros", "Salariés": "1000 à 5000", "Politique de télétravail": "Partiel possible", "Ancienneté moyenne": "4 ans", "Moyenne d'âge": "35 ans"}),
    "leroy-merlin": createProfile("Leroy Merlin accompagne les habitants dans leurs projets de construction, de rénovation, d’aménagement et de décoration. L’enseigne propose des produits, des conseils et des services permettant à chacun d’améliorer son logement, de gagner en confort et de réduire son impact environnemental. Ses équipes exercent en magasin, dans la logistique, le numérique, les achats et les fonctions support. L’entreprise encourage l’autonomie, le partage des connaissances et la coopération afin de rendre les solutions pour la maison accessibles au plus grand nombre.", {"Siège de l'entreprise": "Lezennes - 59", "Année de fondation": "1924", "Chiffre d'affaires": "9,90 Milliards d'euros", "Salariés": "5000 à 10 000", "Politique de télétravail": "Pas de télétravail", "Ancienneté moyenne": "5 ans et plus", "Moyenne d'âge": "36 ans", "Index de parité": "94 / 100", "Répartition H/F": "60% - 40%"})
};

const additionalPresentations: Record<string, string> = {
    assadia: "Assadia accompagne les familles dans leur quotidien grâce à des services de garde d’enfants à domicile et d’entretien de la maison. Son réseau d’agences se développe partout en France avec une attention particulière portée à la qualité de la relation entre les familles, les intervenants et les équipes locales. L’entreprise défend une garde intelligente, fondée sur des activités éducatives et ludiques adaptées à chaque âge, tout en proposant aux collaborateurs un cadre de travail humain et organisé.",
    safti: "SAFTI est un réseau national de conseillers immobiliers indépendants qui accompagne les particuliers dans leurs projets de vente et d’achat. Son modèle entièrement digital permet aux conseillers d’exercer localement tout en profitant des outils, des services et de la visibilité d’une marque nationale. L’entreprise propose un parcours de formation, du coaching et un accompagnement commercial continu afin que chacun puisse développer son activité avec autonomie au sein d’une communauté professionnelle.",
    babilou: "Babilou est un acteur majeur de l’éducation et de la petite enfance. L’entreprise développe un vaste réseau de crèches, accompagne les familles et propose aux employeurs des solutions favorisant l’équilibre entre vie professionnelle et vie personnelle. Devenue entreprise à mission, elle place le développement de l’enfant, la qualité pédagogique et l’inclusion au centre de son projet, grâce à des équipes réunissant professionnels de la petite enfance, experts et fonctions support.",
    "maison-et-services": "Maison et Services est spécialisée dans l’entretien du domicile et du jardin depuis plus de vingt ans. Son réseau d’entreprises locales propose des prestations de ménage, repassage, nettoyage et jardinage adaptées aux besoins réguliers ou ponctuels des particuliers. Le groupe privilégie des structures à taille humaine, des responsables de proximité et des plannings organisés autour des disponibilités des intervenants, avec la confiance et la qualité du service comme principes essentiels.",
    assystem: "Assystem est un groupe international d’ingénierie dont la mission est d’accélérer la transition énergétique. Ses équipes accompagnent la conception, la construction et l’exploitation de projets complexes dans le nucléaire, les transports, les infrastructures et les énergies bas carbone. L’entreprise réunit ingénieurs, techniciens, chefs de projet et experts numériques afin de sécuriser les installations, maîtriser les délais et contribuer concrètement à la décarbonation des activités de ses clients.",
    "bps-interim": "BPS Intérim est un groupe familial spécialisé dans le recrutement temporaire, les CDD et les CDI. Implanté dans le grand Sud-Ouest depuis plus de cinquante ans, il accompagne entreprises et candidats grâce à une connaissance concrète des métiers et des bassins d’emploi locaux. Ses agences interviennent notamment dans le bâtiment, l’industrie, le transport, la logistique et les services, avec un suivi individuel assuré tout au long de chaque mission.",
    rma: "RMA conçoit et déploie des actions commerciales terrain pour des marques nationales et régionales. Depuis 1986, l’entreprise intervient principalement dans les réseaux de grande distribution pour améliorer la présence des produits, soutenir les ventes et accompagner les temps forts commerciaux. Ses collaborateurs réalisent des missions de merchandising, d’animation, de démonstration et de force de vente externalisée, avec un encadrement adapté à chaque opération.",
    "nounou-adom": "Nounou Adom est un réseau spécialisé dans la garde d’enfants à domicile. Ses équipes interviennent avant ou après l’école et la crèche, pendant les vacances, le week-end ou sur des horaires atypiques afin de répondre à l’organisation de chaque famille. Les agences recrutent des intervenants capables d’assurer la sécurité, l’éveil et le bien-être des enfants, avec un accompagnement régulier assuré par les responsables de secteur.",
    "domicile-clean": "Domicile Clean propose des services à la personne dans de nombreuses agglomérations françaises. Ses agences organisent des prestations de ménage, repassage, garde d’enfants et jardinage pour simplifier le quotidien des particuliers. Le réseau s’appuie sur des équipes locales et des méthodes communes afin de garantir une qualité homogène, des interventions stables et un accompagnement professionnel respectueux des salariés comme des clients.",
    "api-restauration": "API Restauration conçoit et prépare des repas pour les entreprises, les établissements scolaires, les structures de santé et les collectivités. L’entreprise défend une cuisine réalisée au plus près des convives, avec des produits sélectionnés et des menus adaptés à chaque public. Ses équipes rassemblent cuisiniers, responsables de site, logisticiens et experts de la nutrition autour du goût, de la qualité de service et de la réduction de l’impact environnemental.",
    joya: "Joya développe des services à domicile destinés à accompagner les personnes dans les gestes et les moments importants de leur quotidien. Les prestations sont organisées selon le niveau d’autonomie, les habitudes de vie et les attentes de chaque bénéficiaire. L’entreprise souhaite créer une relation durable entre intervenants, clients, proches et équipes d’agence, en valorisant l’écoute, la continuité de l’accompagnement et l’utilité sociale de chaque métier.",
    "generale-des-services": "Générale des Services accompagne les particuliers dans l’entretien du domicile, la garde d’enfants, le jardinage et l’aide aux personnes fragiles. Depuis plus de vingt-cinq ans, son réseau d’agences construit des prestations personnalisées pour simplifier la vie quotidienne. L’entreprise organise ses services autour de la proximité, de la bienveillance et de la qualité, avec un suivi régulier des besoins des bénéficiaires et des missions confiées aux intervenants.",
    ettic: "Ettic est une coopérative d’emploi spécialisée dans les secteurs social, médico-social, sanitaire et du service à la personne. Elle met en relation des professionnels avec plusieurs centaines d’établissements pour des missions de remplacement, des CDD et des CDI. Ses équipes connaissent les contraintes des métiers de l’accompagnement et aident chaque candidat à construire son parcours, diversifier ses expériences et trouver des missions adaptées à ses compétences.",
    "aec-interim": "AEC Intérim est une agence d’emploi indépendante implantée localement. Elle accompagne les entreprises dans leurs recrutements et propose aux candidats des missions d’intérim, des CDD et des CDI dans plusieurs secteurs. Sa taille humaine favorise un suivi direct et une bonne connaissance du territoire, permettant aux équipes de tenir compte des compétences, des contraintes et du projet professionnel de chaque candidat.",
    actylink: "ActyLink est un cabinet de recrutement spécialisé dans les métiers techniques et les fonctions support de l’industrie. Il accompagne les entreprises dans la recherche de profils qualifiés et aide les candidats à identifier des opportunités cohérentes avec leur expérience. Le cabinet intervient depuis l’analyse du besoin jusqu’à l’intégration, avec une démarche fondée sur la connaissance des environnements industriels, la transparence et le suivi personnalisé.",
    boulanger: "Boulanger est une enseigne française spécialisée dans l’électroménager, le multimédia et les équipements de la maison. Depuis 1954, l’entreprise développe un réseau de magasins, des services numériques et des solutions couvrant l’achat, la livraison, l’installation et la réparation. Ses collaborateurs exercent dans la vente, la logistique, la relation client, la maintenance et le digital, avec l’objectif de rendre les technologies plus simples et plus utiles au quotidien.",
    "essentiel-domicile": "Essentiel & Domicile intervient dans l’entretien intérieur et extérieur du logement ainsi que dans l’aide au maintien à domicile. Son réseau accompagne les familles, les actifs, les personnes âgées et les personnes en perte d’autonomie. L’entreprise place ses salariés au centre de son organisation en proposant des plannings compatibles avec la vie personnelle, des interventions proches du domicile, des formations et un accompagnement régulier.",
    "happy-curl-la-boutique-du-coiffeur": "La Boutique du Coiffeur est un acteur européen de la distribution de produits professionnels de coiffure et d’esthétique. Fondée en 1988, l’entreprise exploite plusieurs centaines de magasins en France et dans plusieurs pays européens. Ses équipes associent expertise technique, conseil et commerce, avec des formations consacrées aux produits, aux marques et aux techniques de vente ainsi que des possibilités d’évolution au sein du réseau.",
    "feu-vert": "Feu Vert est spécialisé dans l’entretien, la réparation et l’équipement automobile. Son réseau de centres accompagne les conducteurs pour les opérations courantes, les pneumatiques, le remplacement de pièces et l’installation d’accessoires. L’entreprise réunit mécaniciens, techniciens, vendeurs, responsables de centre et fonctions support, et investit dans la formation pour suivre l’évolution des véhicules, des motorisations et des nouveaux usages de mobilité.",
    fiteco: "FITECO accompagne les dirigeants, entrepreneurs et associations dans la gestion et le développement de leurs activités. Ses équipes interviennent en expertise comptable, audit, conseil, fiscalité, droit social et accompagnement stratégique. Grâce à son réseau de bureaux, l’entreprise combine proximité locale et compétences spécialisées pour suivre ses clients à toutes les étapes de leur projet, de la création à la transmission.",
    "groupe-samse": "Le Groupe SAMSE distribue des matériaux de construction et de l’outillage aux professionnels comme aux particuliers. Fondé en 1920, il s’appuie sur plusieurs enseignes et un vaste réseau de points de vente implantés dans de nombreuses régions françaises. Ses métiers couvrent le conseil, le commerce, la logistique, les achats et les fonctions support, avec une forte culture de proximité et d’expertise technique.",
    "sante-cie": "Santé Cie est une société à mission engagée dans la santé de proximité et les parcours de soins ambulatoires en France et en Europe. Le groupe intervient notamment dans la santé à domicile, la dialyse et les centres de soins non programmés. Ses équipes coordonnent des compétences médicales, techniques, logistiques et administratives afin de simplifier le parcours du patient tout en maintenant qualité, sécurité et accompagnement humain.",
    bdo: "BDO est un réseau international d’audit, d’expertise comptable et de conseil présent dans de nombreux pays. En France, ses équipes accompagnent entreprises, associations et acteurs publics dans leurs enjeux financiers, sociaux, juridiques, fiscaux et numériques. Le groupe réunit des spécialistes aux compétences complémentaires et développe la formation, la mobilité et le travail collectif afin de proposer des solutions adaptées aux transformations de chaque secteur.",
};

const withOfficialPresentation = (slug: string, profile: CompanyProfile): CompanyProfile => ({
    ...profile,
    presentation: companyPresentations[slug] ?? profile.presentation,
    facts: companyFacts[slug]
        ? Object.entries(companyFacts[slug]).map(([label, value]) => ({label, value, icon: factIcons[label]}))
        : profile.facts
});

const companyItems: JobBoardItem[] = [
    {
        id: 1,
        name: "Anacours",
        slug: "anacours",
        jobCount: 2600,
        type: "Soutien scolaire",
        bannerUri: "https://f.hellowork.com/media/companypage/192552/495_330/143947_63914711382432746962161859.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/192552.png"
    },
    {
        id: 2,
        name: "Assadia",
        slug: "assadia",
        jobCount: 2600,
        type: "Garde d'enfants",
        bannerUri: "https://f.hellowork.com/media/companypage/192847/495_330/151974_63855683131033186056011192.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/192847.png"
    },
    {
        id: 3,
        name: "Vitalliance",
        slug: "vitalliance",
        jobCount: 300,
        type: "Aide à domicile",
        bannerUri: "https://f.hellowork.com/media/companypage/203795/495_330/13618_63883936727502505250456937.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/203795.png"
    },
    {
        id: 4,
        name: "Ouihelp",
        slug: "ouihelp",
        jobCount: 570,
        type: "Aide à domicile",
        bannerUri: "https://f.hellowork.com/media/companypage/207177/495_330/72983_63841598934867542524343925.png",
        logoUri: "https://f.hellowork.com/img/entreprises/207177.png"
    },
    {
        id: 5,
        name: "Safti",
        slug: "safti",
        jobCount: 545,
        type: "Immobilier",
        bannerUri: "https://f.hellowork.com/media/companypage/201626/495_330/173617_63895967730095230412821301.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/201626.png"
    },
    {
        id: 6,
        name: "Babilou",
        slug: "babilou",
        jobCount: 542,
        type: "Petite enfance & Crèches",
        bannerUri: "https://f.hellowork.com/media/companypage/193160/495_330/34474_63843430749088926233462997.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/193160.png"
    },
    {
        id: 7,
        name: "Maison et Services",
        slug: "maison-et-services",
        jobCount: 540,
        type: "Services à la personne",
        bannerUri: "https://f.hellowork.com/media/companypage/207019/495_330/MaisonetServices_106393_63805937689131986414971679.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/207019.png"
    },
    {
        id: 8,
        name: "Assystem",
        slug: "assystem",
        jobCount: 394,
        type: "Ingénierie & Conseil",
        bannerUri: "https://f.hellowork.com/media/companypage/204151/495_330/Assystem_78563_63766525458436759927623677.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/204151.png"
    },
    {
        id: 9,
        name: "BPS INTERIM",
        slug: "bps-interim",
        jobCount: 376,
        type: "Intérim & Recrutement",
        bannerUri: "https://f.hellowork.com/media/companypage/206265/495_330/87683_63891720494027386010488190.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/206265.png"
    },
    {
        id: 10,
        name: "RMA",
        slug: "rma",
        jobCount: 342,
        type: "Assistance & Santé",
        bannerUri: "https://f.hellowork.com/media/companypage/201502/495_330/101555_63891884842506707630907697.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/201502.png"
    },
    {
        id: 11,
        name: "LNA Santé",
        slug: "lna-sante",
        jobCount: 341,
        type: "Santé & Dépendance",
        bannerUri: "https://f.hellowork.com/media/companypage/199086/495_330/199086_63923784662222678647452203.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/199086.png"
    },
    {
        id: 12,
        name: "Saur Europe",
        slug: "saur-europe",
        jobCount: 305,
        type: "Environnement & Eau",
        bannerUri: "https://f.hellowork.com/media/companypage/201800/495_330/18752_63891717459476289325965897.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/201800.png"
    },
    {
        id: 13,
        name: "Groupe ADF",
        slug: "groupe-adf",
        jobCount: 292,
        type: "Services à l'industrie",
        bannerUri: "https://f.hellowork.com/media/companypage/215771/495_330/215771_63917910994064580412070046.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/215771.png"
    },
    {
        id: 14,
        name: "Nounou Adom",
        slug: "nounou-adom",
        jobCount: 265,
        type: "Garde d'enfants",
        bannerUri: "https://f.hellowork.com/media/companypage/207138/495_330/109403_63877569837550587236786728.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/207138.png"
    },
    {
        id: 15,
        name: "Domicile Clean",
        slug: "domicile-clean",
        jobCount: 257,
        type: "Services à la personne",
        bannerUri: "https://f.hellowork.com/media/companypage/195201/495_330/145344_63896313006584578831117860.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/195201.png"
    },
    {
        id: 16,
        name: "Local.fr",
        slug: "local-fr",
        jobCount: 253,
        type: "Marketing digital & Web",
        bannerUri: "https://f.hellowork.com/media/companypage/199098/495_330/23854_63888976295273968515847564.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/199098.png"
    },
    {
        id: 17,
        name: "Api Restauration",
        slug: "api-restauration",
        jobCount: 221,
        type: "Restauration collective",
        bannerUri: "https://f.hellowork.com/media/companypage/192618/495_330/36516_63871512339918026835639364.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/192618.png"
    },
    {
        id: 18,
        name: "JOYA",
        slug: "joya",
        jobCount: 207,
        type: "Immobilier",
        bannerUri: "https://f.hellowork.com/media/companypage/198205/495_330/167796_63897416838295386038153866.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/198205.png"
    },
    {
        id: 19,
        name: "Tecnomat (ex Bricoman)",
        slug: "tecnomat-ex-bricoman",
        jobCount: 201,
        type: "Matériaux & Bricolage",
        bannerUri: "https://f.hellowork.com/media/companypage/193600/495_330/193600_63918348742887100964254153.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/193600.png"
    },
    {
        id: 20,
        name: "Générale des Services",
        slug: "generale-des-services",
        jobCount: 194,
        type: "Services à la personne",
        bannerUri: "https://f.hellowork.com/media/companypage/196628/495_330/89095_6388871475578215137160833.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/196628.png"
    },
    {
        id: 21,
        name: "ETTIC",
        slug: "ettic",
        jobCount: 185,
        type: "Intérim & Insertion",
        bannerUri: "https://f.hellowork.com/media/companypage/195910/495_330/93526_63843090160979769062474978.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/195910.png"
    },
    {
        id: 22,
        name: "AEC Intérim",
        slug: "aec-interim",
        jobCount: 180,
        type: "Intérim & Recrutement",
        bannerUri: "https://f.hellowork.com/media/companypage/192095/495_330/152313_63899057755804030319395476.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/192095.png"
    },
    {
        id: 23,
        name: "Alliance Emploi",
        slug: "alliance-emploi",
        jobCount: 180,
        type: "Ressources Humaines & Emploi",
        bannerUri: "https://f.hellowork.com/media/companypage/192382/495_330/AllianceEmploi_106560_63780171806124053952969259.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/192382.png"
    },
    {
        id: 24,
        name: "Actylink",
        slug: "actylink",
        jobCount: 179,
        type: "Recrutement & Intérim",
        bannerUri: "https://f.hellowork.com/media/companypage/191965/495_330/99353_63869426700602721056687752.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/191965.png"
    },
    {
        id: 25,
        name: "Boulanger",
        slug: "boulanger",
        jobCount: 179,
        type: "Distribution & Multimédia",
        bannerUri: "https://f.hellowork.com/media/companypage/193534/495_330/6459_63893543882277692733242495.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/193534.png"
    },
    {
        id: 26,
        name: "Essentiel & Domicile",
        slug: "essentiel-domicile",
        jobCount: 177,
        type: "Aide à domicile",
        bannerUri: "https://f.hellowork.com/media/companypage/195820/495_330/195820_63923273971385394551037341.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/195820.png"
    },
    {
        id: 27,
        name: "Happy Curl - La Boutique du Coiffeur",
        slug: "happy-curl-la-boutique-du-coiffeur",
        jobCount: 165,
        type: "Beauté & Coiffure",
        bannerUri: "https://f.hellowork.com/media/companypage/197298/495_330/HappyCurlLaBoutiqueduCoiffeur_68071_6377699369796369322736671.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/197298.png"
    },
    {
        id: 28,
        name: "Feu Vert",
        slug: "feu-vert",
        jobCount: 159,
        type: "Services automobiles",
        bannerUri: "https://f.hellowork.com/media/companypage/206600/495_330/3522_63853112229392820630484530.jpeg",
        logoUri: "https://f.hellowork.com/img/entreprises/206600.png"
    },
    {
        id: 29,
        name: "Leroy Merlin",
        slug: "leroy-merlin",
        jobCount: 154,
        type: "Bricolage & Aménagement",
        bannerUri: "https://f.hellowork.com/media/companypage/198892/495_330/82997_63860346439624231754499175.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/198892.png"
    },
    {
        id: 30,
        name: "FITECO",
        slug: "fiteco",
        jobCount: 147,
        type: "Expertise comptable",
        bannerUri: "https://f.hellowork.com/media/companypage/196281/495_330/5205_63862964711852767114717286.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/196281.png"
    },
    {
        id: 31,
        name: "Groupe Samse",
        slug: "groupe-samse",
        jobCount: 139,
        type: "Négoce de matériaux",
        bannerUri: "https://f.hellowork.com/media/companypage/197159/495_330/3889_6387938161354125967235714.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/197159.png"
    },
    {
        id: 32,
        name: "Santé Cie",
        slug: "sante-cie",
        jobCount: 123,
        type: "Santé & Soins à domicile",
        bannerUri: "https://f.hellowork.com/media/companypage/201688/495_330/201688_639197972068230170166372.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/201688.png"
    },
    {
        id: 33,
        name: "BDO",
        slug: "bdo",
        jobCount: 121,
        type: "Audit & Conseil",
        bannerUri: "https://f.hellowork.com/media/companypage/193259/495_330/48981_6388929710675317907273540.jpg",
        logoUri: "https://f.hellowork.com/img/entreprises/193259.png"
    }
];

export const companyData: Company[] = companyItems.map((company) => ({
    ...company,
    profile: withOfficialPresentation(company.slug, companyProfiles[company.slug] ?? createProfile(additionalPresentations[company.slug], {}))
}));
