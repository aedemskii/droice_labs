function getMousePosition(e) {
    const event = e || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if ( event.pageX == null && event.clientX != null ) {
        const eventDoc = (event.target && event.target.ownerDocument) || document;
        const doc = eventDoc.documentElement;
        const body = eventDoc.body;

        const top = event.clientY +
          ( doc && (doc.scrollTop || body) && (body.scrollTop || 0) ) -
          ( doc && (doc.clientTop || body) && (body.clientTop || 0) );
        const left = event.clientX +
          ( doc && (doc.scrollLeft || body) && (body.scrollLeft || 0) ) -
          ( doc && (doc.clientLeft || body) && (body.clientLeft || 0) );

        return { top, left };
    }

    return { top: event.pageY, left: event.pageX };
}

export default getMousePosition;
