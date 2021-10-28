# Challenge {#Challenge}

A Design System is the single source of truth which groups all the elements that allow teams to design, realise and develop a product.

In Prisma, our Design System, we want to define multiple themes and style all of our components according to them. These themes are defined to match our targets’ expectation (e.g `developer` theme for developer experience, `end-user` for user experience, etc)

These styled components are ready-to-use components which means they are not subject to modifications. They have been created in close relationship between Prisma and the other teams based on their targets’ need so users do not need to apply any style on top of it. By doing it this way, we are guaranteed that our users do not diverge from our brand and they can build products quicker.

Finally, some products have some exceptions and these styled components need to take them into account. That’s why, we have defined for some components a list of limited customisations in order to override what is needed.

The challenge we are facing in TrueLayer with Prisma is to respect the development principles (SOLID, DRY, KISS, etc) and be transparent in the planning of other team. For example, if a client requests a new feature and the corresponding team says they need 2 days, as a team Prisma we do not want to increase that initial cost. So we need to build a Design System where any request can be done within half a day. (the more complex will be done by anticipation of teams’ roadmap)

We would like you to face simplified version of this challenge. The idea is to create one component, the `Button`, and style it respecting two themes, `theme 1` and `theme 2`, and their customisations.

Finally, you will have to create a consumer of this styled component, the `client`, to show use cases and a playground.

<br /><br />

# Specification

## Themes {#Themes}

The project will have to contain 2 themes in order to style the Button component accordingly

| Category   | Sub category  | Theme 1     | Value      | Theme 1      | Value    |
| ---------- | ------------- | ----------  |----------- |-----------   | -------- |
| Colour     |               | azure       | #058ED8    | sun          | #F7AB1B  |
|            |               | cloud burst | #093554    | kashmir blue | #44689A  |
|            |               | white       | #FFFFFF    | white        | #FFFFFF  |
| Spacing    |               | sm          | 12px       | sm           | 8px      |
|            |               | md          | 16px       | md           | 16px     |
|            |               | lg          | 24px       | lg           | 20px     |
| Typography | Font family   | default     | Montserrat | default      | Pacifico |
|            | Font size     | xs          | 12px       | xs           | 12px     |
|            |               | md          | 14px       | md           | 14px     |
|            |               | lg          | 16px       | lg           | 16px     |
| Visuals    | Border radius | normal      | 0px        | normal       | 5px      |
|            | Opacity       | normal      | 1          | normal       | 1        |
|            |               | disabled    | 0.3        | disabled     | 0.3      |

<br /><br />

# Button

## Property {#Properties}

The button will have the following properties

| Name     | Description                        |
| -------- | ---------------------------------- | 
| label    | Label of the button                |
| onClick  | Handler when the button is clicked |

<br />

## Styles {#Styles}

The button will have a global style for each theme agnostic from the states

Add the following tag in your index.html

```html
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet'>
```

| Theme 1                 | Theme 2                 |
| ------------------------| ----------------------- | 
| `fontFamily`: default   | `fontFamily`: default   |
| `fontSize`: md          | `fontSize`: md          |
| `padding`: sm md        | `padding`: sm md        |
| `cursor`: pointer       | `cursor`: pointer       |
| `border-radius`: normal | `border-radius`: normal |

<br />

## States {#States}

The button will have 4 states with a specific style for each theme

[enabled_theme1]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278805349_image.png
[enabled_theme2]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278763764_image.png
[hover_theme1]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278817470_image.png
[hover_theme2]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278773659_image.png
[focus_theme1]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278819267_image.png
[focus_theme2]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278777532_image.png
[disabled_theme1]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278835274_image.png
[disabled_theme2]: https://paper-attachments.dropbox.com/s_1ED7F95DE83B435129F996FCDC35BFDDB3C66B49ED7AF0A5D9EB6E8018CA7F26_1629278789256_image.png

|          | Theme 1                                                                                          |                    | Theme 2                                                                                                 |                    |
| -------- | ------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------- | ------------------ |
| Enabled  | `color`: white<br>`bgColor`: azure<br>`border`: none<br>`opacity`: normal                        | ![enabled_theme1]  | `color`: sun<br>`bgColor`: white<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![enabled_theme2]  |
| Hover    | `color`: white<br>`bgColor`: cloud burst<br>`border`: none<br>`opacity`: normal                  | ![hover_theme1]    | `color`: white<br>`bgColor`: sun<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![hover_theme2]    |
| Focus    | `color`: white<br>`bgColor`: cloud burst<br>`border`: none<br>`opacity`: normal                  | ![focus_theme1]    | `color`: white<br>`bgColor`: sun<br>`border`: 1px solid sun<br>`opacity`: normal                        | ![focus_theme2]    |
| Disabled | `color`: white<br>`bgColor`: azure<br>`border`: none<br>`opacity`: disabled<br>`cursor`: default | ![disabled_theme1] | `color`: sun<br>`bgColor`: white<br>`border`: 1px solid sun<br>`opacity`: disabled<br>`cursor`: default | ![disabled_theme2] |

!!! warning For the disabled state, add the style to prevent the user to trigger any actions

<br />

## Customisations
The button will have some customisations specific to each theme that will override the default value of the theme

|              | Description                                                                       | Theme 1 | Description                                                                                                                                                                                               | Theme 2 |
| ------------ | --------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| color        | It will replace the `color` css property for the state `enabled` and `disabled`   | ✅       | It will replace the `color` and `border-color` css properties for the state `enabled` and `disabled`<br>It will replace the `bgColor` and `border-color` css properties for the state `hover` and `focus` | ✅       |
| bgColor      | It will replace the `bgColor` css property for the state `enabled` and `disabled` | ✅       |                                                                                                                                                                                                           |         |
| hoverBgColor | It will replace the `bgColor` css property for the state `hover`                  | ✅       |                                                                                                                                                                                                           |         |

<br /><br />

# Expectations

A Design System is a tool that developers use to build quickly more complex projects by respecting TrueLayer brand. So, it can not have a negative impact for them such as:

- Releasing buggy components - we want to be confident in the quality of our components
- Slow release frequency - we want to release as often as possible for small things and following a roadmap for the rest.
- Slow release time - we want the time between the end of the development and the projects’ dependencies upgrade as slow as possible
- etc

To avoid that, TrueLayer is building its Design System by producing clean and maintainable code.

!!! warning We want you to have the same high level of quality when doing your test project. You are going to be evaluate on that.

!!! info The scaffold has been created to help you but you are free to update anything you want to show us your ability to produce clean and maintainable code.

<br /><br />

# Appendinx
- [**Client**](./packages/prisma-client/README.md#Overview)
- [**Components**](./packages/prisma-components/README.md#Overview)
- [**Theme1**](./packages/prisma-theme1/README.md#Overview)
- [**Theme2**](./packages/prisma-theme2/README.md#Overview)