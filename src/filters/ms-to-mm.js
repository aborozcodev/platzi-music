const msToMm = {}

function convertMsToMm(ms){
    const mins = Math.floor(ms / 60000)
    const secs = ((ms % 60000 / 1000).toFixed(0))

    return `${mins}:${secs}`
}

msToMm.install = function( Vue ){
    Vue.filter('ms-to-mm', (val) => {
        return convertMsToMm(val)
    })
}

export default msToMm