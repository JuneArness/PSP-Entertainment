# PSP Entertainment | Static Website

The official website for **PSP Entertainment**, an independent record label founded by
Angie Minard, and its related production company **Punkin Seedz Productions**. It is plain
HTML, CSS and JavaScript, with no backend, no build step and no paid platform, and it runs
on GitHub Pages.

- **Pages:** Home, Artists, 3 artist pages, Music, News, About, Punkin Seedz, Press / Media
  kit, Contact, Privacy, Terms, 404
- **Roster:** June Arness, Sativa Reyes, Dezire Tha Singer
- **Contact:** pspent74@gmail.com · 616-293-9420
- **Website created by SAP Development Solutions, LLC**

## Folder structure (75 files, one folder, no subfolders)

```text
psp-entertainment/
├── index.html                    Home
├── artists.html                  Roster
├── artist-june-arness.html       Artist page
├── artist-sativa-reyes.html      Artist page
├── artist-dezire-tha-singer.html Artist page
├── music.html                    Releases (with artist filter) + all videos
├── news.html                     News (with category filter)
├── about.html                    About the label, founder, behind the scenes
├── punkin-seeds.html             Punkin Seedz Productions
├── press.html                    Press / media kit: logos, bios, photo downloads
├── contact.html                  Contact & booking form
├── privacy.html, terms.html, 404.html
├── data.js                       THE FILE YOU EDIT (artists, bios, releases, videos, news)
├── main.js                       Menu, video/photo viewer, contact form, shared cards
├── artists.js                    Roster and artist pages
├── music.js                      Releases, videos and news lists + filters
├── style.css                     All styling (colors and fonts at the top)
├── responsive.css                Phone/tablet/desktop layouts, reduced motion
├── logo-psp.png                  PSP logo (white, transparent background)
├── logo-punkin-seedz.png         Punkin Seedz logo (white, transparent background)
├── june-*.jpg, sativa-*.jpg, dezire-*.jpg   Artist photos
├── release-*.jpg                 Release artwork
├── flyer-*.jpg                   Event/interview flyers (News)
├── bts-*.jpg                     Behind-the-scenes photos
├── vid-*.mp4 + vid-*-poster.jpg  10 videos and their preview images
├── og-image.jpg                  Picture shown when the link is shared
├── favicon.svg, apple-touch-icon.png
├── README.md
└── .gitignore
```

**Why no folders?** The build prompt suggested `css/`, `js/`, `artists/` and
`assets/` folders. Uploading through GitHub's website can silently drop folders, which
breaks every page, and a flat folder can't break that way. Files are grouped by name
instead: `june-`, `release-`, `vid-` and so on.

## Step 1: Preview on your computer

1. The site comes in **two zips** because of file-size limits:
   `psp-entertainment-part-1-site.zip` (the site) and `psp-entertainment-part-2-videos.zip`
   (3 larger videos). Right-click each one → **Extract All** → choose the **same place** for
   both → **Extract**. Both unpack into the same `psp-entertainment` folder. If Windows asks
   about merging folders, click **Yes**. Never open pages from inside a zip.
   Check: the folder should have 75 files, including `vid-dezire-reel.mp4`,
   `vid-highlights.mp4` and `vid-sativa-live.mp4`.
2. For the full preview (videos and all features), run this with Python 3.11:

```bash
cd psp-entertainment
python -m http.server 8000
```

3. Open http://localhost:8000. Press `Ctrl + C` in the terminal to stop.

## Step 2: Put it on GitHub

1. Sign in at https://github.com → **+** → **New repository**.
2. Name it `psp-entertainment`, choose **Public**, and leave README, .gitignore and license
   **unchecked**. Click **Create repository**.
3. Click **uploading an existing file**.
4. Open the extracted folder, press **Ctrl + A**, and drag all the files (not the folder)
   into the browser. The whole site is about 46 MB, so give it a minute. Every file is
   under GitHub's 25 MB upload limit, and there are fewer than 100 files, so one upload
   works.
5. When every file is listed, type `Initial PSP Entertainment website` and click
   **Commit changes**.
6. Check that `index.html` is at the top level of the repository, not inside a folder.

Or with Git:

```bash
cd psp-entertainment
git init
git add .
git commit -m "Initial PSP Entertainment website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Step 3: Turn on GitHub Pages

1. In the repository, go to **Settings** → **Pages**.
2. Set **Source** to **Deploy from a branch**, then choose **main** and **/ (root)**, and click
   **Save**.
3. Wait 1 to 3 minutes. The site will be at
   `https://YOUR-ACCOUNT.github.io/psp-entertainment/`.
4. Open it and press **Ctrl + Shift + R** for a fresh load.

## Step 4: Fix link previews (after it's live)

Each `.html` file has `https://www.example.com/` near the top. Replace it with the live
address (canonical, og:url, og:image, twitter:image and the ld+json block) so shared links
show the PSP picture. On GitHub: open the file → **pencil** → **Ctrl + F** → change → **Commit
changes**.

## Custom domain (later)

1. **Settings → Pages → Custom domain**: enter the domain and click **Save**.
2. At the registrar:
   - Add a **CNAME** record for `www` pointing to `YOUR-ACCOUNT.github.io`.
   - Add four **A** records for the bare domain: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153` and `185.199.111.153`.
3. Once DNS updates (up to 24 hours), tick **Enforce HTTPS** and redo Step 4.

## Where to update things (all in data.js unless noted)

Open `data.js` on GitHub → **pencil** → edit → **Commit changes** → wait 2 minutes → open the
site → **Ctrl + Shift + R**.

| To change | Where |
| --- | --- |
| Company email, phone, founder | `company:` at the top |
| Company social links | `company.socials`: remove the `//` from a line and paste the real link |
| Contact form sending | `company.formEndpoint` (see below) |
| Artist bios | `artists:` → that artist → `bio: [ "paragraph", "paragraph" ]` |
| Artist photos | Upload the new photo, then change `photo:` (cards) or `hero:` (page header) |
| Streaming links | `artists` → `streaming:`, and each release's `links:` |
| Artist social links | `artists` → `socials:` |
| Releases | `releases:` has a full copy-paste example in the comment above it |
| Videos | `videos:` takes a video file or a YouTube link |
| News | `news:`. Delete the two "Placeholder" cards once real news exists |
| Founder bio and photo | `company.founderBio` / `company.founderPhoto` |

**Adding a photo:** save it as a JPEG about 1600px wide, name it in lowercase with dashes
(for example `sativa-reyes-press-1.jpg`), and upload it with **Add file → Upload files**.
Names are case-sensitive on GitHub.

**Adding a YouTube video:** open the video on YouTube → **Share** → copy the link →
paste it as `youtube: "https://youtu.be/..."` and set `poster:` to any image in the folder.

### Rules that prevent most problems

- Keep text inside "double quotes". Every list item ends with a comma, except the last.
- An empty `""` hides that item. The site never shows a dead link.
- Made a mistake? Open the file on GitHub → **History** → copy back the earlier version.

## Connecting the contact form

Until it's connected, the form checks the fields and then tells the visitor plainly that
the message was **not sent**. It offers a one-click link to open their email app with the
message already filled in, addressed to pspent74@gmail.com.

1. Create a free account at https://formspree.io → **New Form** → recipient
   `pspent74@gmail.com`.
2. Copy the endpoint (it looks like `https://formspree.io/f/abcdwxyz`).
3. In `data.js`, set `formEndpoint: "https://formspree.io/f/abcdwxyz",`.
4. Send a test from the live site.

## Content notes

- **Every fact comes from the supplied bios, flyers or the artist's own links.** Nothing
  was invented.
- **June Arness's bio** ends at its last complete sentence. The supplied bio was cut off
  after "Be…".
- **Sativa Reyes's influences** are labeled "Sounds that inform the artist", with a note
  that they are not an endorsement.
- **The 4 News items come from the flyers you sent.** The flyers don't show a year, so add
  it in `data.js`. Two sample cards are marked "Placeholder".
- **"Punkin Seedz" is spelled as on the company logo and in the bios.** The prompt said
  "Seeds" in places; change `company.productionName` if the official spelling differs.
- **Unnamed people:** a few videos ("Live performance", "Studio session") and the
  behind-the-scenes photos don't name the people in them yet. Add names in `data.js`.

## Privacy and security

No trackers, analytics, cookies, passwords or keys. YouTube videos load only when someone
presses play, using YouTube's privacy-enhanced mode. The repository is public, so don't
upload contracts or private files.

## Checked before delivery

- All 14 pages load with no script errors, served from a subfolder the way GitHub
  Pages serves them. No broken images.
- No sideways scrolling at 1920, 1440, 1280, 1024, 768, 480, 430, 390 and 375px.
- The mobile menu opens, closes with Escape and keeps keyboard focus inside while open.
- The release filter by artist and the news filter by category both work.
- The video viewer opens local videos and YouTube. The photo viewer supports arrows,
  swipe and Escape, and returns focus afterward.
- The contact form:
  - checks its fields;
  - pre-selects the inquiry type and artist from booking buttons;
  - offers the email-app fallback when it isn't connected.
- The Press page bios open, and each has a copy button.
- A separate reviewer compared every claim with the supplied bios, and the issues found
  were corrected.
