"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Apia"] = {
	"1911" : helpers.makeTestYear("Pacific/Apia", [
		["1911-01-01T11:26:55+00:00", "23:59:59", "LMT", 41216 / 60],
		["1911-01-01T11:26:56+00:00", "23:56:56", "WSST", 690]
	]),

	"1950" : helpers.makeTestYear("Pacific/Apia", [
		["1950-01-01T11:29:59+00:00", "23:59:59", "WSST", 690],
		["1950-01-01T11:30:00+00:00", "00:30:00", "SST", 660]
	]),

	"2010" : helpers.makeTestYear("Pacific/Apia", [
		["2010-09-26T10:59:59+00:00", "23:59:59", "SST", 660],
		["2010-09-26T11:00:00+00:00", "01:00:00", "SDT", 600]
	]),

	"2011" : helpers.makeTestYear("Pacific/Apia", [
		["2011-04-02T13:59:59+00:00", "03:59:59", "SDT", 600],
		["2011-04-02T14:00:00+00:00", "03:00:00", "SST", 660],
		["2011-09-24T13:59:59+00:00", "02:59:59", "SST", 660],
		["2011-09-24T14:00:00+00:00", "04:00:00", "SDT", 600],
		["2011-12-30T09:59:59+00:00", "23:59:59", "SDT", 600],
		["2011-12-30T10:00:00+00:00", "00:00:00", "WSDT", -840]
	]),

	"2012" : helpers.makeTestYear("Pacific/Apia", [
		["2012-03-31T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2012-03-31T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2012-09-29T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2012-09-29T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2013" : helpers.makeTestYear("Pacific/Apia", [
		["2013-04-06T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2013-04-06T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2013-09-28T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2013-09-28T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2014" : helpers.makeTestYear("Pacific/Apia", [
		["2014-04-05T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2014-04-05T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2014-09-27T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2014-09-27T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2015" : helpers.makeTestYear("Pacific/Apia", [
		["2015-04-04T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2015-04-04T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2015-09-26T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2015-09-26T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2016" : helpers.makeTestYear("Pacific/Apia", [
		["2016-04-02T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2016-04-02T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2016-09-24T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2016-09-24T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2017" : helpers.makeTestYear("Pacific/Apia", [
		["2017-04-01T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2017-04-01T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2017-09-23T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2017-09-23T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2018" : helpers.makeTestYear("Pacific/Apia", [
		["2018-03-31T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2018-03-31T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2018-09-29T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2018-09-29T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2019" : helpers.makeTestYear("Pacific/Apia", [
		["2019-04-06T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2019-04-06T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2019-09-28T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2019-09-28T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2020" : helpers.makeTestYear("Pacific/Apia", [
		["2020-04-04T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2020-04-04T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2020-09-26T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2020-09-26T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2021" : helpers.makeTestYear("Pacific/Apia", [
		["2021-04-03T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2021-04-03T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2021-09-25T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2021-09-25T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2022" : helpers.makeTestYear("Pacific/Apia", [
		["2022-04-02T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2022-04-02T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2022-09-24T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2022-09-24T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2023" : helpers.makeTestYear("Pacific/Apia", [
		["2023-04-01T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2023-04-01T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2023-09-23T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2023-09-23T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2024" : helpers.makeTestYear("Pacific/Apia", [
		["2024-04-06T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2024-04-06T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2024-09-28T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2024-09-28T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2025" : helpers.makeTestYear("Pacific/Apia", [
		["2025-04-05T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2025-04-05T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2025-09-27T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2025-09-27T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2026" : helpers.makeTestYear("Pacific/Apia", [
		["2026-04-04T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2026-04-04T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2026-09-26T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2026-09-26T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2027" : helpers.makeTestYear("Pacific/Apia", [
		["2027-04-03T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2027-04-03T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2027-09-25T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2027-09-25T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2028" : helpers.makeTestYear("Pacific/Apia", [
		["2028-04-01T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2028-04-01T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2028-09-23T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2028-09-23T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2029" : helpers.makeTestYear("Pacific/Apia", [
		["2029-03-31T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2029-03-31T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2029-09-29T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2029-09-29T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2030" : helpers.makeTestYear("Pacific/Apia", [
		["2030-04-06T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2030-04-06T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2030-09-28T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2030-09-28T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2031" : helpers.makeTestYear("Pacific/Apia", [
		["2031-04-05T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2031-04-05T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2031-09-27T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2031-09-27T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2032" : helpers.makeTestYear("Pacific/Apia", [
		["2032-04-03T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2032-04-03T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2032-09-25T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2032-09-25T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2033" : helpers.makeTestYear("Pacific/Apia", [
		["2033-04-02T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2033-04-02T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2033-09-24T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2033-09-24T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2034" : helpers.makeTestYear("Pacific/Apia", [
		["2034-04-01T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2034-04-01T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2034-09-23T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2034-09-23T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2035" : helpers.makeTestYear("Pacific/Apia", [
		["2035-03-31T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2035-03-31T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2035-09-29T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2035-09-29T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2036" : helpers.makeTestYear("Pacific/Apia", [
		["2036-04-05T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2036-04-05T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2036-09-27T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2036-09-27T14:00:00+00:00", "04:00:00", "WSDT", -840]
	]),

	"2037" : helpers.makeTestYear("Pacific/Apia", [
		["2037-04-04T13:59:59+00:00", "03:59:59", "WSDT", -840],
		["2037-04-04T14:00:00+00:00", "03:00:00", "WSST", -780],
		["2037-09-26T13:59:59+00:00", "02:59:59", "WSST", -780],
		["2037-09-26T14:00:00+00:00", "04:00:00", "WSDT", -840]
	])
};