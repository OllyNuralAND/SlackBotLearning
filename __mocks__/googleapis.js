jest.genMockFromModule('googleapis');

const mockData = require('./mockData');

const googleapis = {
    calendar: function(version) {
        return {
            events: {
                list: function({params}, cb) {
                    cb(null, mockData.mockData)
                }
                  
            }
        }
    },
    originalDate: mockData.originalDate,
    dateTime: mockData.dateTime,
    date: mockData.date
}

module.exports = googleapis;