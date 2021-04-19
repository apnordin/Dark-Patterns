import React from "react";

export default function Welcome ( {setGoToTutorial }) {

    const goToDarkPatterns = () => {
        const url = "https://www.darkpatterns.org/";
        window.open(url, '_blank');
    }

    return (
        <div className="col-12 text-center">
            <h1 className="mainpagewelcome">Welcome to Dark Patterns
            </h1>
            <div className="row">
                <div className="col-12 text-center lightblue mt-4">
                    <h3 className="boldheader mt-4">What are dark patterns?</h3>
                    <p className="maintext">Dark patterns are UI design "strategies" used in websites and apps that trick the user into doing things they didn't mean to, such as purchasing a product or subscribing to a service. Visit <span onClick={goToDarkPatterns} className="hyperlink">DarkPatterns</span> for more info, including explanations of different types of dark patterns and a "hall of shame" featuring real-life examples.</p>
                    <h3 className="boldheader mt-4">What is this website?</h3>
                    <p className="maintext mb-3">When it comes to design principles, screenshots and explanations can only take you so far. I wanted to build a website that would provide a realistic simulation of a user interface riddled with dark patterns. You may notice that the layout and user experience of this website is similar to that of a popular and intuitive tax-filing service, which many have pointed to as an example of a website that unrelentingly uses dark patterns. Most of the dark patterns you will encounter on this simulation are pulled directly from my experience using that service.</p>
                </div>
                <div className="col-12 text-center">
                    <button onClick={() => setGoToTutorial(true)} type="button" className="btn btn-main mt-3">Click Here to Get Started!</button>
                </div>
            </div>
        </div>
    )
}