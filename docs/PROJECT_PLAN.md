# Character Name Forge: MVP Plan

## Product decision

Build the first release as a standalone fantasy tool, separate from unrelated finance or retirement content. Launch it on a free Cloudflare Pages subdomain first. A custom domain can wait until the name, positioning, and usefulness are proven.

## MVP scope

### Included

- One-page character name generator
- Race or creature, role, name style, simplified alignment, traits, elements, and inspiration
- Every field optional and defaulted to No Preference
- Multi-select traits and elements
- Empty-form ordinary-name joke
- Generate Name, More Like This, New Direction, and Save
- Session-only shortlist with copy, remove, similar, and final selection
- Responsive dark interface
- Local generation with no API

### Deliberately postponed

- User accounts
- Cloud database
- AI name generation
- Persistent cross-device favorites
- Custom race interpretation
- Traditional nine-part alignment grid
- Surnames, titles, epithets, and full character profiles
- Ads, analytics, and monetization
- Additional fantasy generators

## Key interface choices

- Use **Name Style** rather than Gender because the field controls the output style.
- Keep the simplified affiliation/alignment list for the MVP. A nine-part alignment grid can become an optional advanced mode later.
- Let Other use an unusual/general fantasy sound profile initially. Do not reveal a custom race field until the generator has a meaningful way to interpret it.
- Keep result and shortlist panels visible on larger screens.
- On mobile, stack the form, result, and shortlist. Scroll to the result after generation.

## Generation strategy

Use curated phonetic components and weighted influence palettes.

1. Race chooses the main sound profile.
2. Role, traits, elements, and alignment add weighted phonetic tendencies.
3. Name style lightly affects endings.
4. Inspiration creates a small sound fragment derived from the input.
5. The generator makes many candidates.
6. Candidates are scored for length, pronounceability, repetition, and session duplicates.
7. One candidate is chosen from the best group so results do not become deterministic.

`More Like This` preserves a prior opening or ending and usually keeps its construction pattern.

`New Direction` avoids the prior pattern and sound anchors while retaining the character configuration.

## Testing plan

### Functional

- Blank form produces ordinary names and the joke message.
- Any selected field switches to fantasy generation.
- More Like This produces a new name and keeps a recognizable feature.
- New Direction produces a noticeably different construction.
- Save does not duplicate a name.
- Shortlist survives a reload in the same browser tab.
- Copy, remove, similar, and final actions work.
- Reset clears the form but does not erase the shortlist.

### Content quality

Create a test sheet with at least 100 combinations, including contradictory combinations such as:

- Undead + healer + fire
- Fairy + tank + brutal
- Orc + elegant + light
- Construct + nature + spirit
- Human + no other choices
- Inspiration-only entries such as Moon, Mushroom, Protector, and Lost Prince

For each batch, mark names as:

- Strong
- Usable
- Awkward
- Unpronounceable
- Too literal
- Too similar to a famous character or franchise

Then adjust component lists and weights rather than adding one-off exceptions whenever possible.

## Deployment path

1. Create a private GitHub repository.
2. Add these project files and commit them.
3. Create a Cloudflare Pages project connected to the repository.
4. Set build command to `npm run build`.
5. Set output directory to `_site`.
6. Deploy to the generated `pages.dev` address.
7. Test desktop and mobile behavior.
8. Add a custom domain only after the project name is settled.

## Next build milestone

Tune output quality before adding more features. The highest-value next task is a structured name-testing pass across race and influence combinations.
