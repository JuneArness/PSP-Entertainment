/* ==========================================================================
   PSP ENTERTAINMENT | data.js : THE FILE YOU EDIT
   --------------------------------------------------------------------------
   Company info, artists, bios, releases, streaming links, videos and news
   all live here. Every page reads this file, so one change updates the
   whole site (home page, artist pages, Music, News, Press).

   RULES (a small typo can blank a section):
   - Keep text inside "double quotes". Need a quote inside? Use ’ or \".
   - Every item in a list ends with a comma, EXCEPT the last one.
   - "" (empty quotes) means "not known yet". Empty links are simply hidden;
     the site never shows a dead button.
   - File names must match exactly (lowercase, e.g. "june-alley.jpg").
   - After editing on GitHub, open the site and press Ctrl+Shift+R.

   SOURCE: bios and facts were supplied by PSP Entertainment. Nothing here
   is invented. Anything not yet supplied is left empty.
   ========================================================================== */
window.PSP = {

  /* ------------------------------------------------------------------------
     1. COMPANY
     ------------------------------------------------------------------------ */
  company: {
    name: "PSP Entertainment",
    productionName: "Punkin Seedz Productions",   // spelled as on the company logo
    productionTagline: "It’s only up from here",
    founder: "Angie Minard",
    founderTitle: "Founder & CEO, PSP Entertainment and Punkin Seedz Productions",
    founderPhoto: "",        // EDIT: e.g. "angie-minard.jpg" once supplied
    founderBio: [],          // EDIT: add paragraphs when a biography is supplied
    email: "pspent74@gmail.com",
    phone: "616-293-9420",

    /* Company social links. Only filled-in links are shown.
       Copy the example line, remove the //, and paste the real link. */
    socials: [
      // { label: "Instagram", url: "https://www.instagram.com/YOUR-HANDLE" },
      // { label: "YouTube",   url: "https://www.youtube.com/@YOUR-CHANNEL" },
      // { label: "TikTok",    url: "https://www.tiktok.com/@YOUR-HANDLE" },
      // { label: "Facebook",  url: "https://www.facebook.com/YOUR-PAGE" }
    ],

    /* FORM ENDPOINT
       The Contact form does NOT send anywhere until this is filled in.
       Free option: create a form at https://formspree.io and paste its
       address here, e.g. "https://formspree.io/f/abcdwxyz".
       Until then the form offers to open the visitor's email app instead. */
    formEndpoint: "",

    developerCredit: "Website created by SAP Development Solutions, LLC"
  },

  /* ------------------------------------------------------------------------
     2. ARTISTS
     Fields:
       id          short name used in links (don't change once live)
       page        the artist's page file
       name, genre, location, descriptor (one line), statement (pull quote)
       signedTo    as stated in the artist's bio
       photo       main photo (cards)      hero: large page photo
       heroPosition  which part of the hero photo to keep in view
       bio         paragraphs of the full biography
       facts       [label, value] pairs shown beside the bio
       influences  shown as "Sounds that inform the artist" (not endorsements)
       gallery     [file, alt text, caption]
       socials / streaming   real links only; "" hides the button
       booking     who to contact for booking/management
     ------------------------------------------------------------------------ */
  artists: [
    {
      id: "june-arness",
      page: "artist-june-arness.html",
      name: "June Arness",
      genre: "Hip-Hop",
      location: "Grand Rapids, Michigan",
      descriptor: "Major Independent Recording Artist",
      statement: "A distinct lane in hip-hop that blends raw authenticity with cinematic energy.",
      signedTo: "PSP Entertainment",
      photo: "june-stage-mic.jpg",
      photoAlt: "June Arness performing on stage with a microphone",
      hero: "june-alley.jpg",
      heroAlt: "June Arness leaning against a brick wall in a narrow alley",
      heroPosition: "62% 8%",
      bio: [
        "June Arness is a Major Independent Recording Artist based in Grand Rapids, Michigan, and signed to PSP Entertainment. With three full-length projects and a catalogue available on every major streaming platform, including Apple Music, Pandora, iHeartRadio and YouTube Music, June has carved out a distinct lane in hip-hop that blends raw authenticity with cinematic energy.",
        "His latest album, The Art-of-Fact (Un Earthed) (2025), is a 17-track, 59-minute statement of purpose: part autobiography, part manifesto.",
        "He has published music with major recording artists such as Rob Ruler Cyph of Cop Hevy Ent., cementing his credibility in the industry and proving he moves in elite circles."
      ],
      facts: [
        ["Genre", "Hip-Hop"],
        ["Home", "Grand Rapids, Michigan"],
        ["Label", "PSP Entertainment"],
        ["Latest album", "The Art-of-Fact (Un Earthed), 2025"]
      ],
      bigNumbers: [["3", "Full-length projects"], ["17", "Tracks on The Art-of-Fact"], ["59", "Minutes of music"]],
      influences: [],
      gallery: [
        ["june-stage-mic.jpg", "June Arness performing on stage in a green-lit venue", "Live"],
        ["june-stage-red.jpg", "June Arness performing under red and green stage lights", "Live"],
        ["june-stage-green.jpg", "June Arness singing into a microphone on stage", "Live"],
        ["june-closeup.jpg", "June Arness in sunglasses and a white cap, pointing toward the camera", "Portrait"],
        ["june-portrait.jpg", "June Arness standing on a balcony in an Art-of-Fact shirt", "Portrait"],
        ["june-artwork.jpg", "Illustrated artwork of June Arness in a white cap and sunglasses", "Artwork"],
        ["june-alley.jpg", "June Arness leaning against a brick wall in an alley", "Portrait"]
      ],
      socials: [
        { label: "Instagram", url: "https://www.instagram.com/june_arness_the_artist/" },
        { label: "YouTube", url: "https://www.youtube.com/@June_Arness" },
        { label: "Official site", url: "https://junearness.github.io/June-Arness-The-Artist/" }
      ],
      streaming: [
        { label: "Apple Music", url: "https://music.apple.com/us/album/the-art-of-fact-un-earthed/1816589238" },
        { label: "YouTube Music", url: "https://www.youtube.com/channel/UCN_RLqY7CeSD2Q8NrQhkHAg" },
        { label: "iHeartRadio", url: "https://www.iheart.com/artist/june-arness-42138078/albums/the-art-of-fact-un-earthed-330534712" },
        { label: "Spotify", url: "" },     // EDIT: paste the Spotify artist link
        { label: "Pandora", url: "" }      // EDIT: paste the Pandora artist link
      ],
      booking: "Booking through PSP Entertainment"
    },
    {
      id: "sativa-reyes",
      page: "artist-sativa-reyes.html",
      name: "Sativa Reyes",
      genre: "Goth-Rap / Underground Hip-Hop",
      location: "Chicago suburbs",
      descriptor: "Emerging goth-rap artist",
      statement: "Raw emotion, atmospheric melodies and gritty hip-hop in a fresh, distinctive sound.",
      signedTo: "Punkin Seedz Productions",
      photo: "sativa-studio.jpg",
      photoAlt: "Sativa Reyes under red light at 35th Street Studios in Chicago",
      hero: "sativa-live-closeup.jpg",
      heroAlt: "Sativa Reyes singing into a microphone on stage under purple light",
      heroPosition: "35% 40%",
      bio: [
        "Sativa Reyes is an emerging goth-rap artist from the Chicago suburbs, blending raw emotion, atmospheric melodies and gritty hip-hop into a fresh, new, distinctive sound.",
        "Originally performing under the alias Sa6t6an6aS starting in 2019, the artist rebranded as Sativa Reyes in 2023 and relaunched into the music scene.",
        "Sativa Reyes is currently signed to Punkin Seedz Productions and managed by Angie Minard."
      ],
      facts: [
        ["Genre", "Goth-rap / underground hip-hop"],
        ["From", "Chicago suburbs"],
        ["Performing since", "2019 (as Sa6t6an6aS)"],
        ["Relaunched as Sativa Reyes", "2023"],
        ["Signed to", "Punkin Seedz Productions"],
        ["Management", "Angie Minard"]
      ],
      bigNumbers: [["2019", "Began performing as Sa6t6an6aS"], ["2023", "Relaunched as Sativa Reyes"]],
      influences: ["Lil Peep", "XXXTENTACION", "$uicideboy$", "Post Malone", "Young Dolph"],
      gallery: [
        ["sativa-live-closeup.jpg", "Sativa Reyes singing into a microphone under purple stage light", "Live"],
        ["sativa-studio.jpg", "Sativa Reyes under red light at 35th Street Studios, Chicago", "35th Street Studios, Chicago"],
        ["sativa-live-stage.jpg", "Sativa Reyes performing on a stage lit in blue", "Live"],
        ["sativa-portrait.jpg", "Close-up portrait of Sativa Reyes with dark red hair", "Portrait"]
      ],
      socials: [],     // EDIT: e.g. { label: "Instagram", url: "https://www.instagram.com/sativa_reyes/" }
      streaming: [],   // EDIT: e.g. { label: "Spotify", url: "https://open.spotify.com/artist/..." }
      booking: "Management & booking: Angie Minard"
    },
    {
      id: "dezire-tha-singer",
      page: "artist-dezire-tha-singer.html",
      name: "Dezire Tha Singer",
      genre: "R&B",
      location: "",
      descriptor: "Emerging R&B artist, singer, songwriter and music creator",
      statement: "Emotion, femininity, confidence and real-life storytelling.",
      signedTo: "Punkin Seedz Productions",
      photo: "dezire-white.jpg",
      photoAlt: "Dezire Tha Singer in a white outfit and silver boots, seated among candles",
      hero: "dezire-angel.jpg",
      heroAlt: "Dezire Tha Singer wearing pink angel wings in a snowy mountain landscape",
      heroPosition: "50% 30%",
      bio: [
        "Dezire, also known as Dezire Tha Singer, is an emerging R&B artist, singer, songwriter and music creator bringing a unique blend of emotion, femininity, confidence and real-life storytelling to her music.",
        "With a passion for creating music that connects with listeners on a personal level, Dezire uses her voice and creativity to turn experiences, emotions and relationships into songs that people can feel.",
        "Beyond performing, Dezire is passionate about the creative side of music, including songwriting, engineering and producing. Her vision extends beyond simply being an artist: she is building a lasting brand and creative legacy centered on authenticity, originality and artistic expression.",
        "Known for her distinctive sound and feminine aesthetic, Dezire continues to develop her artistry while expanding her presence across music and digital platforms. Her growing catalog shows different sides of her artistry, from vulnerable and romantic records to confident, sensual and unapologetic anthems.",
        "Dezire is currently signed to Punkin Seedz Productions, where she continues to develop her career and release new music. With more music and creative projects on the way, she is focused on establishing herself as an artist whose voice, story and vision leave a lasting impression."
      ],
      facts: [
        ["Genre", "R&B"],
        ["Roles", "Singer, songwriter, music creator"],
        ["Creative focus", "Songwriting, engineering, producing"],
        ["Signed to", "Punkin Seedz Productions"],
        ["Management", "Angie Minard"]
      ],
      bigNumbers: [],
      influences: [],
      gallery: [
        ["dezire-angel.jpg", "Dezire Tha Singer wearing pink angel wings in the snow", "Visuals"],
        ["dezire-snow.jpg", "Dezire Tha Singer on a white horse in a snowy birch forest", "Visuals"],
        ["dezire-white.jpg", "Dezire Tha Singer in white among candles and silver decor", "Visuals"]
      ],
      socials: [],
      streaming: [],
      booking: "Management & booking: Angie Minard"
    }
  ],

  /* ------------------------------------------------------------------------
     3. RELEASES (Music page, home page, artist pages)
       artist      artist id from above
       type        "Album", "Single" or "EP"
       cover       artwork file ("" shows a styled title card instead)
       comingSoon  true shows a "Coming soon" tag
       links       real links only; "" hides that button
     Copy-paste example:
     {
       artist: "sativa-reyes", title: "New Song", type: "Single", year: "2026",
       cover: "release-new-song.jpg", coverAlt: "Cover art for New Song",
       note: "", comingSoon: false,
       links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" }
     },
     ------------------------------------------------------------------------ */
  releases: [
    {
      artist: "june-arness", title: "The Art-of-Fact (Un Earthed)", type: "Album", year: "2025",
      cover: "release-art-of-fact.jpg", coverAlt: "June Arness in a green Ducks hockey jersey performing with a microphone",
      note: "17 tracks · 59 minutes", comingSoon: false, featured: true,
      links: {
        appleMusic: "https://music.apple.com/us/album/the-art-of-fact-un-earthed/1816589238",
        iheart: "https://www.iheart.com/artist/june-arness-42138078/albums/the-art-of-fact-un-earthed-330534712",
        spotify: "", youtubeMusic: "", youtube: "", pandora: ""
      }
    },
    {
      artist: "june-arness", title: "We Bosses", type: "Single", year: "",
      cover: "release-we-bosses.jpg", coverAlt: "June Arness on stage in a black cowboy hat, arm raised, singing into a microphone",
      note: "feat. Rob Ruler Cyph", comingSoon: false,
      links: {
        appleMusic: "https://music.apple.com/us/album/we-bosses/1816589238?i=1816589244",
        pandora: "https://pandora.app.link/nHWrsYPnZ2b",
        youtube: "https://youtu.be/YqV6lwKI4rA",
        spotify: "", youtubeMusic: "", iheart: ""
      }
    },
    {
      artist: "june-arness", title: "Capricorn", type: "Album", year: "",
      cover: "release-capricorn.jpg", coverAlt: "Capricorn cover art: a smiling baby in a sailor outfit, with the title in white script",
      note: "", comingSoon: false,
      links: {
        iheart: "https://www.iheart.com/artist/june-arness-42138078/albums/capricorn-359360229",
        pandora: "https://pandora.app.link/zsrw9xx4I6b",
        spotify: "", appleMusic: "", youtubeMusic: "", youtube: ""
      }
    },
    {
      artist: "june-arness", title: "The Anunnaki", type: "Single", year: "",
      cover: "release-anunnaki.jpg", coverAlt: "The Anunnaki cover art: an armored warrior in a feathered golden headdress",
      note: "feat. Loona Laflair", comingSoon: true,
      links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" }
    },
    // Sativa Reyes: popular releases named in the bio. Add artwork and links when supplied.
    { artist: "sativa-reyes", title: "King 4 a day", type: "", year: "", cover: "", coverAlt: "", note: "Popular release", comingSoon: false,
      links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" } },
    { artist: "sativa-reyes", title: "Quizas", type: "", year: "", cover: "", coverAlt: "", note: "Popular release", comingSoon: false,
      links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" } },
    { artist: "sativa-reyes", title: "Rearview Sunset", type: "", year: "", cover: "", coverAlt: "", note: "Popular release", comingSoon: false,
      links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" } },
    { artist: "sativa-reyes", title: "No pressure", type: "", year: "", cover: "", coverAlt: "", note: "Popular release", comingSoon: false,
      links: { spotify: "", appleMusic: "", youtubeMusic: "", youtube: "", pandora: "", iheart: "" } }
    // Dezire Tha Singer: no release titles supplied yet. Add them here.
  ],

  /* ------------------------------------------------------------------------
     4. VIDEOS
       file + poster   a video file in this folder, or
       youtube         a YouTube link (plays inside the site)
       artist          artist id, or "" for label videos
       vertical        true for phone-shaped (tall) videos
     ------------------------------------------------------------------------ */
  videos: [
    { title: "PSP Entertainment", subtitle: "Label reel", artist: "", file: "vid-psp-reel.mp4", poster: "vid-psp-reel-poster.jpg", youtube: "", vertical: true, featured: true },
    { title: "Feeling Like Jeezy", subtitle: "Official video", artist: "june-arness", file: "", poster: "vid-june-feeling-like-jeezy-poster.jpg", youtube: "https://youtu.be/C_CxSpwobDo", vertical: false, featured: true },
    { title: "Sativa Reyes", subtitle: "Live on stage", artist: "sativa-reyes", file: "vid-sativa-live.mp4", poster: "vid-sativa-live-poster.jpg", youtube: "", vertical: false, featured: true },
    { title: "Dezire Tha Singer", subtitle: "Visual reel", artist: "dezire-tha-singer", file: "vid-dezire-reel.mp4", poster: "vid-dezire-reel-poster.jpg", youtube: "", vertical: true, featured: true },
    { title: "We Bosses (feat. Rob Ruler Cyph)", subtitle: "Official audio", artist: "june-arness", file: "", poster: "release-we-bosses.jpg", youtube: "https://youtu.be/YqV6lwKI4rA", vertical: false },
    { title: "Hold Up (feat. Sunny Redd13)", subtitle: "Official audio", artist: "june-arness", file: "", poster: "release-art-of-fact.jpg", youtube: "https://youtu.be/q0QpkvCvFVY", vertical: false },
    { title: "I Need Your Love", subtitle: "Official audio · from Capricorn", artist: "june-arness", file: "", poster: "release-capricorn.jpg", youtube: "https://youtu.be/i_5Gifjw0G4", vertical: false },
    { title: "Feeling Like Jeezy", subtitle: "Teaser", artist: "june-arness", file: "vid-june-feeling-like-jeezy.mp4", poster: "vid-june-feeling-like-jeezy-poster.jpg", youtube: "", vertical: false },
    { title: "June Arness", subtitle: "Visualizer", artist: "june-arness", file: "vid-june-visualizer.mp4", poster: "vid-june-visualizer-poster.jpg", youtube: "", vertical: false },
    { title: "June Arness", subtitle: "Night out", artist: "june-arness", file: "vid-june-night-out.mp4", poster: "vid-june-night-out-poster.jpg", youtube: "", vertical: true },
    // EDIT: add performer names to these titles once confirmed
    { title: "Live performance", subtitle: "PSP moments", artist: "", file: "vid-live-performance-1.mp4", poster: "vid-live-performance-1-poster.jpg", youtube: "", vertical: true },
    { title: "Live performance", subtitle: "PSP moments", artist: "", file: "vid-live-performance-2.mp4", poster: "vid-live-performance-2-poster.jpg", youtube: "", vertical: true },
    { title: "Studio session", subtitle: "PSP moments", artist: "", file: "vid-studio-session.mp4", poster: "vid-studio-session-poster.jpg", youtube: "", vertical: false },
    { title: "Highlights", subtitle: "PSP moments", artist: "", file: "vid-highlights.mp4", poster: "vid-highlights-poster.jpg", youtube: "", vertical: true }
  ],

  /* ------------------------------------------------------------------------
     5. NEWS
       category    New Releases, Artist News, PSP Entertainment News,
                   Events, Media or Announcements
       date        shown exactly as written
       placeholder true = sample card, clearly labeled; delete when real
                   news replaces it
     ------------------------------------------------------------------------ */
  news: [
    {
      title: "Sativa Reyes on the bill: The Gatekeepers Takeover",
      category: "Events", artist: "sativa-reyes",
      date: "March 22 · 7:00 PM",  // EDIT: add the year
      summary: "Sativa Reyes was featured on the bill for The Gatekeepers Takeover, part of the Rep Your City Concert Series at 433 Broadway St, New Haven, Indiana.",
      image: "flyer-sativa-concert.jpg", imageAlt: "Flyer for The Gatekeepers Takeover, Rep Your City Concert Series, featuring Sativa Reyes",
      past: true, placeholder: false
    },
    {
      title: "Dezire Tha Singer on RapFiendRadio",
      category: "Media", artist: "dezire-tha-singer",
      date: "Sunday, March 22 · 4:00 PM EST",
      summary: "Dezire Tha Singer was scheduled for an interview with RapFiendRadio (RFR).",
      image: "flyer-dezire-rfr.jpg", imageAlt: "RapFiendRadio flyer for an interview with Dezire Tha Singer",
      past: true, placeholder: false
    },
    {
      title: "June Arness on RapFiendRadio",
      category: "Media", artist: "june-arness",
      date: "Saturday, February 8 · 7:30 PM EST",
      summary: "June Arness was scheduled for an interview with RapFiendRadio (RFR).",
      image: "flyer-june-rfr.jpg", imageAlt: "RapFiendRadio flyer for an interview with June Arness, shown performing with a microphone",
      past: true, placeholder: false
    },
    {
      title: "Sativa Reyes on RapFiendRadio",
      category: "Media", artist: "sativa-reyes",
      date: "Saturday, January 25 · 7:30 PM EST",
      summary: "Sativa Reyes was scheduled for an interview with RapFiendRadio (RFR).",
      image: "flyer-sativa-rfr.jpg", imageAlt: "RapFiendRadio flyer for an interview with Sativa Reyes",
      past: true, placeholder: false
    },
    {
      title: "Placeholder: new release announcement",
      category: "New Releases", artist: "",
      date: "",
      summary: "This is a sample card showing where release news will appear. Replace or delete it in data.js.",
      image: "", imageAlt: "",
      past: false, placeholder: true
    },
    {
      title: "Placeholder: upcoming show",
      category: "Announcements", artist: "",
      date: "",
      summary: "This is a sample card showing where show announcements will appear. Replace or delete it in data.js.",
      image: "", imageAlt: "",
      past: false, placeholder: true
    }
  ],

  /* Behind-the-scenes photos (About and Press pages).
     EDIT: add names to captions once confirmed. */
  behindTheScenes: [
    ["bts-set.jpg", "A photo shoot in progress on a white studio set, with a camera on a gimbal", "On set"],
    ["bts-group.jpg", "Three men posing together in a white photo studio", "Studio shoot"],
    ["bts-duo.jpg", "Two men in white outfits posing and smiling in a photo studio", "Studio shoot"],
    ["bts-camera.jpg", "A camera operator filming a man in white on a studio set", "Behind the lens"],
    ["bts-pose.jpg", "A man in an all-white outfit striking a pose in the studio", "Studio shoot"],
    ["bts-studio-bw.jpg", "Black-and-white photo of a man in white posing in a studio", "Studio shoot"]
  ]
};
