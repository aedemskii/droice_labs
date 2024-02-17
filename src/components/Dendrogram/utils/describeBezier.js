function describeBezier( start, end, shiftToControlPoint ) {
    return `M${start.left} ${start.top} C ${shiftToControlPoint} ${start.top},
        ${shiftToControlPoint} ${end.top}, ${end.left} ${end.top}`
}

export default describeBezier;
