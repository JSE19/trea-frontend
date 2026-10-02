# Route map

This project keeps the original Stitch export in [html_pages](../html_pages) as a design reference. The actual app routes below are the source of truth for conversion work.

| Original HTML file                                                                        | Target route                                                                      | Purpose                      |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------- |
| [html_pages/homepage.html](../html_pages/homepage.html)                                   | [app/page.tsx](../app/page.tsx)                                                   | Homepage / event feed        |
| [html_pages/event_page.html](../html_pages/event_page.html)                               | [app/events/[id]/page.tsx](../app/events/[id]/page.tsx)                           | Event detail page            |
| [html_pages/event_photo_gallery.html](../html_pages/event_photo_gallery.html)             | [app/events/[id]/gallery/page.tsx](../app/events/[id]/gallery/page.tsx)           | Event gallery                |
| [html_pages/create_event_form.html](../html_pages/create_event_form.html)                 | [app/events/create/page.tsx](../app/events/create/page.tsx)                       | Create event form            |
| [html_pages/organiser_dashboard.html](../html_pages/organiser_dashboard.html)             | [app/dashboard/organiser/page.tsx](../app/dashboard/organiser/page.tsx)           | Organizer dashboard          |
| [html_pages/user_dashboard.html](../html_pages/user_dashboard.html)                       | [app/dashboard/user/page.tsx](../app/dashboard/user/page.tsx)                     | User dashboard               |
| [html_pages/registration_and_checkout.html](../html_pages/registration_and_checkout.html) | [app/events/[id]/checkout/page.tsx](../app/events/[id]/checkout/page.tsx)         | Registration and checkout    |
| [html_pages/registration_confirmation.html](../html_pages/registration_confirmation.html) | [app/events/[id]/confirmation/page.tsx](../app/events/[id]/confirmation/page.tsx) | Confirmation after purchase  |
| [html_pages/wallet_connect.html](../html_pages/wallet_connect.html)                       | [app/wallet/connect/page.tsx](../app/wallet/connect/page.tsx)                     | Wallet connection modal/flow |

## Route conventions

- Use the App Router structure under [app](../app).
- Dynamic routes use `[id]` for event-specific pages.
- Keep route names stable and consistent across contributors.
- Do not add parallel routes that duplicate the same HTML mockup under a different path.

## Status

- Route structure is now scaffolded as placeholders.
- Conversion work should use these paths as the canonical target routes.
