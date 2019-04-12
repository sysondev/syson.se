const DEFAULT_VALUES = {
    HOURLY_RATE: 900,
    NUMBER_OF_DAYS: 253,
    DEFAULT_PENSION: 2600,
    SICK_DAYS: 10,
    EXTRA_VACATION_DAYS: 0,
    OTHER_MONTHLY_COSTS: 1000,
    EXTRA_PENSION: 0,
}

const calculateSalary = ({ hourlyRate, sickDays = DEFAULT_VALUES.SICK_DAYS, extraVacationDays = DEFAULT_VALUES.EXTRA_VACATION_DAYS,
    extraPension = DEFAULT_VALUES.EXTRA_PENSION, otherMonthlyCosts = DEFAULT_VALUES.OTHER_MONTHLY_COSTS }) =>
    Math.round(((((DEFAULT_VALUES.NUMBER_OF_DAYS / 12) - ((sickDays + extraVacationDays) / 12) - 2.5)
        * (hourlyRate * 8 * 0.7))
        - ((DEFAULT_VALUES.DEFAULT_PENSION + extraPension) * 1.2426) - otherMonthlyCosts) / 1.3142)


export { calculateSalary, DEFAULT_VALUES }