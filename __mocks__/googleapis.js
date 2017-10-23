const googleapis = {
    calendar: function(version){
        return {
            events: {
                list: function({}, cb){
                    console.log('dd')
                }
            }
        }
    }
}

module.exports = googleapis;

