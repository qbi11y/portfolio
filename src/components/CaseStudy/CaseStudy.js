import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import caseStudies from '../../data/caseStudies.json';

const CaseStudy = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const study = caseStudies[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) {
        return (
            <div className="container case-study">
                <p>That case study doesn't exist.</p>
                <Link to="/portfolio" className="back-link">&larr; Back home</Link>
            </div>
        );
    }

    return (
        <div className="container case-study">
            <Link to="/portfolio" className="back-link">&larr; Back home</Link>

            <header className="case-study--hero">
                <p className="case-study--kicker">{study.kicker}</p>
                <h1 className="case-study--name">{study.name}</h1>
                <p className="case-study--meta"><strong>Role:</strong> {study.role} &nbsp;·&nbsp; <strong>Tools:</strong> {study.tools}</p>

                <div className="case-study--stat">
                    <span className="case-study--stat-value">{study.heroStat.value}</span>
                    <span className="case-study--stat-label">{study.heroStat.label}</span>
                </div>
            </header>

            <section className="case-study--block">
                <p className="case-study--label">The Problem</p>
                <p className="case-study--body">{study.problem}</p>
            </section>

            <section className="case-study--block">
                <p className="case-study--label">The Approach</p>
                <p className="case-study--body">{study.approach}</p>
            </section>

            <blockquote className="case-study--callout">{study.callout}</blockquote>

            <section className="case-study--block">
                <p className="case-study--label">What I Learned</p>
                <p className="case-study--body">{study.learned}</p>
            </section>

            <section className="case-study--block case-study--block-result">
                <p className="case-study--label">The Result</p>
                <p className="case-study--body">{study.result}</p>
            </section>

            <section className="case-study--block case-study--block-takeaway">
                <p className="case-study--label">Why It Matters</p>
                <p className="case-study--body">{study.takeaway}</p>
            </section>

            <div className="case-study--footer">
                <Link to="/portfolio" className="back-link">&larr; Back home</Link>
                <button className="button is-light" onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    );
};

export default CaseStudy;
