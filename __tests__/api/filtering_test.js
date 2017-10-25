let filtering = require('../../api/filtering');
let mockDataFile = require('../../__mocks__/mockData');
// items is the actual array of events returned, see mockData for further details (meta data)
// Get each different type of mockData from the file
let mockData = mockDataFile.mockData.items;
let mockDataSingle = mockDataFile.mockDataSingle.items;
let mockDataEmpty = mockDataFile.mockDataEmpty.items;

describe('Should return correct responses given array of multiple events from mock data', () => {
    it("Should return an array of length 2 when filtering on 'learningevents'", (done) => {
        expect(filtering.formatEvents(mockData, "learningevents")).toHaveLength(2);
        done();
    });

    it("Should return an array of length 1 when filtering on 'cop'", (done) => {
        expect(filtering.formatEvents(mockData, "cop")).toHaveLength(1);
        done();
    });

    it("Should return an array of length 1 when filtering on 'landl'", (done) => {
        expect(filtering.formatEvents(mockData, "landl")).toHaveLength(1);
        done();
    });

    it("Should return an array of length 0 when filtering on the incorrect 'somebadfilter'", (done) => {
        let formattedData = filtering.formatEvents(mockData, "somebadfilter");
        expect(formattedData).toEqual([]);
        done();
    });
    
    it("Should return an array of length 0 when filtering on the integer 3", (done) => {
        let formattedData = filtering.formatEvents(mockData, 3);
        expect(formattedData).toEqual([]);
        done();
    });

    it("Should return an empty array when filtering on an object", (done) => {
        let formattedData = filtering.formatEvents(mockData, {name: 'hello'});
        expect(formattedData).toEqual([]);
        done();
    })
})

describe("Should return correct responses when given a single event from mockData", () => {
    it("Should return the correct, single CoP event from the mockData when filtering for 'cop'", (done) => {
        expect(filtering.formatEvents(mockDataSingle, 'cop')).toHaveLength(1);
        done();
    });

    it("Should return an empty array when filtering for 'learningevents' in mockData", (done) => {
        expect(filtering.formatEvents(mockDataSingle, 'landl')).toHaveLength(0);
        done();
    })
});

describe("Should return correct responses when given a no events from mockData", () => {
    it("Should return the correct, single CoP event from the mockData when filtering for 'cop'", (done) => {
        expect(filtering.formatEvents(mockDataEmpty, 'cop')).toHaveLength(0);
        done();
    });
});