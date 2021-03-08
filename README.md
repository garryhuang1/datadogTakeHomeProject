# Datadog Take Home Assignment
- [X] Init Project
- [X] Init bootstrap and sass
- [X] Create mockup of design
    - [X] Header
    - [X] Footer
    - [X] Content
    - [X] Mobile side nav
    - [X] Looks good responsive
- [X] Init Hugo
- [ ] Deploy to S3 and Cloudfront

# Notes
- Boostrap card columns have a weird ordering of cards. Since it is done column by column, on mobile, the cards appear to be out of order. I could've made the cards look more ordered in mobile, but in order to prevent duplicated content and showing/hiding, I left it as is. I decided to keep with the cards since it seems to be the easiest way to maintain a large amount of cards if we wanted to increase the number of cards on this page.
- The header/footer menus were configured inside config.toml using hugo menus. This seems to be the easiest way for me to group the header in a way that made sense.
- The sass files are split up into different portions.  
    - colors.sass is only defining the colors as well as the color array that was used for the logos on the testimonial card
    - content.sass handles any of the main page content. In this case, it would be the cards as well as top section for the pricing details
    - header/footer.sass handles styles only pertaining to their section
    - global.sass styles that are meant to be applied across the entire css files
- There are actually two layers to this project. First one is purely static and not using hugo. Inside the Datadog folder, is the actual Hugo site. Since I am not as familiar with using Hugo and Bootstrap, I wanted to isolate this project into two parts to avoid trying to do and learn too much at once.
- There are some optimizations that can be made to make this page load a bit faster:
    - Instead of rendering each logo inside the testimonials separately, I can use a spritesheet. This would prevent multiple network requests for multiple different images.
    - Images could go through an optimizer to remove any meta data related to the image
    - CSS minimizer/js bundlers
    - Using CDN to serve the images, js, and css
- If you read through the notes, I would really appreciate any feedback, whether its about the design, code, structure, or just general advice. I really enjoyed working with Hugo and learning how to use it. 