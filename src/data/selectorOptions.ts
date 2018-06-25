// COVERS ALL SELECTORS' OPTIONS OTHER THAN SUBCATEGORIES (HANDLED IN A SEPARATE DATA FILE)

import {
    DurationOption,
    StoreFormatOption,
    RegionOption,
    CustomerSegmentOption,
    ComparisonOptionAvailableFor4WeekDuration,
    ComparisonOptionAvailableFor12WeekDuration,
    ComparisonOptionAvailableFor26WeekDuration,
    ComparisonOptionAvailableFor52WeekDuration,
    DateOptionAvailableFor4WeekDuration,
    DateOptionAvailableFor12WeekDuration,
    DateOptionAvailableFor26WeekDuration,
    DateOptionAvailableFor52WeekDuration,
    MeasureName
} from '../sharedTypes'

export const durationOptions = {
    '4 weeks': undefined,
    '12 weeks': undefined,
    '26 weeks': undefined,
    '52 weeks': undefined
}

export function getDatesOptions(selectedDuration: DurationOption):
    DateOptionAvailableFor4WeekDuration[] |
    DateOptionAvailableFor12WeekDuration[] |
    DateOptionAvailableFor26WeekDuration[] |
    DateOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '4 weeks': return [
            '12 Feb 2018 - 11 Mar 2018',
            '05 Feb 2018 - 04 Mar 2018',
            '29 Jan 2018 - 25 Feb 2018',
            '22 Jan 2018 - 18 Feb 2018',
            '15 Jan 2018 - 11 Feb 2018',
            '08 Jan 2018 - 04 Feb 2018',
            '01 Jan 2018 - 28 Jan 2018',
            '25 Dec 2017 - 21 Jan 2018',
            '18 Dec 2017 - 14 Jan 2018',
            '11 Dec 2017 - 07 Jan 2018',
            '04 Dec 2017 - 31 Dec 2017',
            '27 Nov 2017 - 24 Dec 2017',
            '20 Nov 2017 - 17 Dec 2017',
            '13 Nov 2017 - 10 Dec 2017',
            '06 Dec 2017 - 03 Dec 2017'
        ]
        case '12 weeks': return [
            '11 Dec 2017 - 11 Mar 2018',
            '04 Dec 2017 - 04 Mar 2018',
            '27 Nov 2017 - 25 Feb 2018',
            '20 Nov 2017 - 18 Feb 2018',
            '13 Nov 2017 - 11 Feb 2018',
            '06 Nov 2017 - 04 Feb 2018',
            '30 Oct 2017 - 28 Jan 2018',
            '23 Oct 2017 - 21 Jan 2018',
            '16 Oct 2017 - 14 Jan 2018',
            '09 Oct 2017 - 07 Jan 2018',
            '02 Oct 2017 - 31 Dec 2017',
            '25 Sept 2017 - 24 Dec 2017',
            '18 Sept 2017 - 17 Dec 2017',
            '11 Sept 2017 - 10 Dec 2017',
            '04 Sept 2017 - 03 Dec 2017'
        ]
        case '26 weeks': return [
            '31 Aug 2017 - 11 Mar 2018',
            '24 Aug 2017 - 04 Mar 2018',
            '14 Aug 2017 - 25 Feb 2018',
            '07 Aug 2017 - 18 Feb 2018',
            '31 Jul 2017 - 11 Feb 2018',
            '24 Jul 2017 - 04 Feb 2018',
            '17 Jul 2017 - 28 Jan 2018',
            '10 Jul 2017 - 21 Jan 2018',
            '03 Jul 2017 - 14 Jan 2018',
            '26 Jun 2017 - 07 Jan 2018',
            '19 Jun 2017 - 31 Dec 2017',
            '12 Jun 2017 - 24 Dec 2017',
            '05 Jun 2017 - 17 Dec 2017',
            '29 May 2017 - 10 Dec 2017',
            '22 May 2017 - 03 Dec 2017'
        ]
        case '52 weeks': return [
            '13 Mar 2017 - 11 Mar 2018',
            '06 Mar 2017 - 04 Mar 2018',
            '27 Feb 2017 - 25 Feb 2018',
            '20 Feb 2017 - 18 Feb 2018',
            '13 Feb 2017 - 11 Feb 2018',
            '06 Feb 2017 - 04 Feb 2018',
            '30 Jan 2017 - 28 Jan 2018',
            '23 Jan 2017 - 21 Jan 2018',
            '16 Jan 2017 - 14 Jan 2018',
            '09 Jan 2017 - 07 Jan 2018',
            '02 Jan 2017 - 31 Dec 2017',
            '26 Dec 2016 - 24 Dec 2017',
            '19 Dec 2016 - 17 Dec 2017',
            '12 Dec 2016 - 10 Dec 2017',
            '05 Dec 2016 - 03 Dec 2017'
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}

export function getComparisonOptions(selectedDuration: DurationOption):
    ComparisonOptionAvailableFor4WeekDuration[] |
    ComparisonOptionAvailableFor12WeekDuration[] |
    ComparisonOptionAvailableFor26WeekDuration[] |
    ComparisonOptionAvailableFor52WeekDuration[] {
    switch (selectedDuration) {
        case '52 weeks': return [
            'vs. previous 52 weeks'
        ]
        case '26 weeks': return [
            'vs. previous 26 weeks',
            'vs. last year',
        ]
        case '12 weeks': return [
            'vs. previous 12 weeks',
            'vs. last year',
        ]
        case '4 weeks': return [
            'vs. previous 4 weeks',
            'vs. last year',
        ]
        default:
            const _exhaustiveCheck: never = selectedDuration
            return _exhaustiveCheck
    }
}

export const storeFormatOptions = {
    'All store formats': undefined,
    'Express stores': undefined,
    'Metro stores': undefined,
    'Extra stores': undefined,
    'Online': undefined
}

export const regionOptions: RegionOption[] = [
    'All regions',
    'North region',
    'Central region',
    'West region',
    'South region'
]

export const customerSegmentOptions: CustomerSegmentOption[] = [
    'All customer segments',
    'Young single person',
    'Family with young children',
    'Post family',
    'Older person'
]

export const measureOptions: MeasureName[] = [
    'Sales value',
    'Spend per customer',
    'Customers',
    'Retailer visits',
    'Spend per visit',
    'Units per visit',
    'Basket penetration',
    'Frequency of purchase',
    'Sales units'
]
