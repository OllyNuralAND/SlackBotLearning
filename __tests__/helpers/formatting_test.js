const formatting = require('../../helpers/formatting');
const mockDataFile = require('../../__mocks__/mockData');
const eventTypes = require('../../api/eventTypes');

// Helper functions to get EventType object by ID
const getEventTypeById = function (id) {
    return eventTypes.find(eventType => {
        return eventType.id == id;
    })
}
const getLearningEventType = getEventTypeById('learningevents');
const getCopEventType = getEventTypeById('cop');
const getLunchAndLearnType = getEventTypeById('landl');

// This function just formats data, no matter the input
// We run data through #filterData first, then through #formatData
// So in the tests we just care that it is formatting correctly, don't care about input
describe('Should format and return correct responses when given an array of mockData', () => {
    let mockData;

    beforeEach(() => {
        mockData = mockDataFile.mockData.items;
    });

    it("Should return correct formatted data when formatting for 'learningevents'", (done) => {
        const formattedEvent = formatting.formatEvents(mockData, 'learningevents');
        for (let event of formattedEvent){
            expect(event.eventType).toEqual('learningevents');
        }
        done();
    });

    it("Should return correct formatted data when formatting for 'cop'", (done) => {
        const formattedEvent = formatting.formatEvents(mockData, 'cop');
        for (let event of formattedEvent){
            expect(event.eventType).toEqual('cop');
        }
        done();
    });

    it("Should return correct formatted data when formatting for 'landl'", (done) => {
        const formattedEvent = formatting.formatEvents(mockData, 'landl');
        for (let event of formattedEvent){
            expect(event.eventType).toEqual('landl');
        }
        done();
    });
});
