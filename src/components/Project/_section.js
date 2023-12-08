.text {
    white-space: pre-wrap;
    
}

.column--content {
    margin-bottom: -4em;
}

.column--content:last-child {
    margin-bottom: 1em;
}

.container--hero {
    padding-left: 10em;
}
.container--section {
    padding: 1em 1.5em;
}

.container--section:first-child {
    margin: .5em 0;
}

.icon--link {
    display: flex;
    align-items: center;
}

.lh-mobile {
    line-height: 1.75;
}

p {
    white-space: pre-line;
    color: rgb(125, 125, 125);
}


@media only screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    .column--content {
        margin-bottom: -1em;
    }

    .hero-body.container--hero {
        padding: 1rem 3.5rem;
    }

    .container--section {
        padding-bottom: 3em;
    }
}
@media only screen and (min-device-width: 768px) and (orientation: portrait) {
    .column--content {
        margin-bottom: -1em;
    }

    .hero-body.container--hero {
        padding: 1rem 1.5rem;
    }

    .container--section {
        padding-bottom: 3em;
    }
}

@media screen and (min-width: 769px) {
    .hero-body.container--hero {
        padding: 3rem 1.5rem;
    }
}

@media only screen and (min-device-width: 768px) and (orientation: landscape) {
    .column--content {
        margin-bottom: -1em;
    }

    .container--hero {
        margin-left: .35em;
    }

    .container--section {
        padding-bottom: 3em;
    }
}

@media screen and (min-device-width: 1200px) {
    .hero-body.container--hero {
        padding: 3rem 3.5rem;
    }

    .container--section {
        padding-bottom:3em;
    }

}