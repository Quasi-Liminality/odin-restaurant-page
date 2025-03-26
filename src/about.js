const createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
};

const createHeading = (text) => {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
};

export const AboutPage = () => {
    const container = (function () {
        const div = document.createElement('div');
        div.className = 'container about';
        return div;
    })();

    const headingOne = createHeading("About Odin's");
    const paragraphOne = createParagraph(
        `
            Step into a slice of culinary eternity! Established circa 3,200 BCE in the glorious city of Uruk, where
            civilization
            itself was born, Odin's has been serving humanity (and the occasional deity) for over
            five millennia.
            That’s right—this is not just a restaurant. This is history on a plate.
        `
    );

    const headingTwo = createHeading("Our Origins");
    const paragraphTwo = createParagraph(
        `
            Founded by the legendary Enheduanna the Elder (self-declared "First Restaurateur of Humanity"), Odin's
            began as a humble tavern catering to scribes fresh out of cuneiform practice. Legend has it that
            Enheduanna
            invented hummus here, inspired by a divine dream sent by Inanna herself. Over the centuries, we’ve
            expanded our menu and
            polished our craft—one Mesopotamian mezze platter at a time.
        `
    );

    const headingThree = createHeading("Our Commitment");
    const paragraphThree = createParagraph(
        `
            From the first amphora of beer lovingly served to Gilgamesh himself, to the exquisite lamb kebabs you’ll
            enjoy today, our mission has always been the same: legendary service, epic meals, and zero complaints
            (except that one
            time during the Babylonian captivity… but we don’t talk about that).
        `
    );

    const headingFour = createHeading("Join the Legacy");
    const paragraphFour = createParagraph(
        `
            Odin's isn’t just a restaurant—it’s an odyssey through time, taste, and tantalizing
            traditions. So why wait another thousand years? Book your table today and become part of the most
            legendary dining
            experience in history. Reservations available by clay tablet or modern convenience. Walk-ins welcome
            (chariots, camels,
            and horses all accommodated).
        `
    );

    container.append(
        headingOne, 
        paragraphOne, 
        headingTwo, 
        paragraphTwo,
        headingThree,
        paragraphThree,
        headingFour,
        paragraphFour
    );

    const content = document.querySelector('#content');
    content.append(container);
};