import React, { Component } from 'react';

class Comp extends Component {

    render() {
        return (
            <iframe
                src={`https://theconvo.space/embed/dt?url=${encodeURIComponent(document.location.origin + document.location.pathname)}&height=400&theme=light`}
                title="public"
                allowtransparency="true"
                scrolling="no"
                frameBorder="0"
                height="400px"
                width="100%"
                padding="0"
            />
        )
    }

}

export default Comp
