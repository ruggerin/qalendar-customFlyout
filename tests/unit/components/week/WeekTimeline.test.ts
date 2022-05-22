import {mount} from "@vue/test-utils";
import WeekTimeline from '../../../../src/components/week/WeekTimeline.vue'
import {describe, expect, test} from "vitest";
import Time from "../../../../src/helpers/Time";

describe('WeekTimeline.vue', () => {
	let wrapper = mount(WeekTimeline, {
		props: {
			time: new Time('sunday', 'de-DE'),
			days: [
				{ dayName: 'Sonntag', dateTimeString: '2022-05-15 00:00', events: [] },
				{ dayName: 'Montag', dateTimeString: '2022-05-16 00:00', events: [] },
				{ dayName: 'Dienstag', dateTimeString: '2022-05-17 00:00', events: [] },
				{ dayName: 'Mittwoch', dateTimeString: '2022-05-18 00:00', events: [] },
				{ dayName: 'Donnerstag', dateTimeString: '2022-05-19 00:00', events: [] },
				{ dayName: 'Freitag', dateTimeString: '2022-05-20 00:00', events: [] },
				{ dayName: 'Samstag', dateTimeString: '2022-05-21 00:00', events: [] },
			],
		}
	})

	test('Rendering all 7 days', () => {
		const days = wrapper.findAll('.week-timeline__day')
		expect(days).toHaveLength(7)
	})

	test('Displaying a localized day name', () => {
		const days = wrapper.findAll('.week-timeline__day-name')
		expect(days[0].text()).toContain('SO')
	})

	test('Rendering in day mode', () => {
		wrapper = mount(WeekTimeline, {
			props: {
				time: new Time('sunday', 'en-US'),
				days: [{ dayName: 'Sunday', dateTimeString: '2022-05-15 00:00', events: [] }],
			}
		})

		const days = wrapper.findAll('.week-timeline__day-name')
		expect(days[0].text()).toContain('SU')
	})
})