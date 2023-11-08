export function createSvgElement (
    styles,  
    viewBox, 
    xmlns="http://www.w3.org/2000/svg", 
    strokeWidth=null, 
    stroke=null
) {
    const svgElement = document.createElementNS(xmlns, 'svg')
    svgElement.setAttribute('class', styles)
    svgElement.setAttribute('viewBox', viewBox)
    svgElement.setAttribute('xmlns',  xmlns)
    // 0, null, undefined, "", false
    if ( strokeWidth ) svgElement.setAttribute('stroke-width', strokeWidth)
    if ( stroke ) svgElement.setAttribute('stroke', stroke)
    
    return svgElement
}

export function createPathElement (
    d,
    xmlns="http://www.w3.org/2000/svg",
    strokeLineCap=null,
    strokeLineJoin=null,
    fill=null
) {
 const pathElement = document.createElementNS(xmlns, 'path')
 pathElement.setAttribute('d', d)
 pathElement.setAttribute('xmlns', xmlns)
 if ( strokeLineCap ) pathElement.setAttribute('strokeLineCap', strokeLineCap)
 if (strokeLineJoin) pathElement.setAttribute('strokeLineJoin', strokeLineJoin)
 if (fill) pathElement.setAttribute('fill', fill)
 
 return pathElement
}