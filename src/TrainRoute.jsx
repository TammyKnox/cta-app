import classes from './TrainRoute.module.css'

function TrainRoute(props) {
    const routeInfo = props.stuff;

    return(

        <>
        <div className={classes.routeCard}   style={{backgroundColor: `#${routeInfo.RouteColorCode}`}}>
            <h2 style={{ color: `#${routeInfo.RouteTextColor}` }}>{routeInfo.Route}</h2>

            <p style={{ color: `#${routeInfo.RouteTextColor}` }}>
            Service ID: {routeInfo.ServiceId}</p>

            <p style={{ color: `#${routeInfo.RouteTextColor}` }}>Route URL:</p>
            <a
            href={routeInfo.RouteURL["#cdata-section"]}
            target="_blank"
            >
            {routeInfo.RouteURL["#cdata-section"]}
            </a>
        </div>

        </>

    )
}

export default TrainRoute