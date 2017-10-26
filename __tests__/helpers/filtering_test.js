const filtering = require('../../helpers/filtering');
const mockDataFile = require('../../__mocks__/mockData');
const eventTypes = require('../../api/eventTypes');

// Helper functions to get EventType object by ID
const getEventTypeById = function(id) {
    return eventTypes.find(eventType => {
        return eventType.id == id;
    })
}
const getLearningEventType = getEventTypeById('learningevents');
const getCopEventType = getEventTypeById('cop');
const getLunchAndLearnType = getEventTypeById('landl');

describe('Should filter and return correct responses given array of multiple events from mock data', () => {
    let mockData;

    beforeEach(() => {
        mockData = mockDataFile.mockData.items;
    });

    it("Should return an array of length 2 when filtering on 'learningevents'", (done) => {
        expect(filtering.filterEvents(mockData, getLearningEventType)).toHaveLength(2);
        done();
    });

    it("Should return an array of length 1 when filtering on 'cop'", (done) => {
        expect(filtering.filterEvents(mockData, getCopEventType)).toHaveLength(1);
        done();
    });

    it("Should return an array of length 1 when filtering on 'landl'", (done) => {
        expect(filtering.filterEvents(mockData, getLunchAndLearnType)).toHaveLength(1);
        done();
    });
    
    it("Should return an array of length 0 when filtering on the integer 3", (done) => {
        expect(filtering.filterEvents(mockData, 3)).toEqual([]);
        done();
    });

    it("Should return an empty array when filtering on an object", (done) => {
        expect(filtering.filterEvents(mockData, {name: 'hello'})).toEqual([]);
        done();
    });

});

describe('Should filter and return correct responses given array of a single event from mock data', () => {
    let mockDataSingle;

    beforeEach(() => {
        mockDataSingle = mockDataFile.mockData.items.slice(0, 1);
    });

    it("Should return the correct, single CoP event from the mockData when filtering for 'cop'", (done) => {
        expect(filtering.filterEvents(mockDataSingle, getCopEventType)).toHaveLength(1);
        done();
    });

    it("Should return an empty array when filtering for 'learningevents' in mockData", (done) => {
        expect(filtering.filterEvents(mockDataSingle, getLunchAndLearnType)).toHaveLength(0);
        done();
    });

});

describe('Should filter and return correct responses given empty array from mock data', () => {
    let mockDataEmpty;
    
    beforeEach(() => {
        mockDataEmpty = [];
    });

    it("Should return the correct, single CoP event from the mockData when filtering for 'cop'", (done) => {
        expect(filtering.filterEvents(mockDataEmpty, getCopEventType)).toHaveLength(0);
        done();
    });
});