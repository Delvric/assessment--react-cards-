import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (<div className="cardGroup">{props.children}</div>);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={"icon fa " + props.icon + "  card__descriptionIcon"} />
            <div className="card__descriptionText">
                {props.description}
                {props.hint &&
                    (<React.Fragment>
                        <br />
                        {props.hint}
                    </React.Fragment>
                    )}
            </div>
        </div>
        <div className="card__price">{props.price}</div>
    </div>
);

const App = () => (
    <CardGroup>
        <Card description="Trial"
            price="Free!"
            icon="fa-thumbs-o-up"

        />

        <Card description="Basic tier"
        price="10.00" 
        icon="fa-trophy" 
        hint="(most popular)" />

        <Card description="Adcanced tier" 
        price="$6,000.00" 
        icon="fa-bolt" 
        hint="(only for enterprise-level professional)" />

    </CardGroup>
);

export default App;
