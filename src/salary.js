const DEFAULT_VALUES = {
    NUMBER_OF_DAYS: 253,
    DEFAULT_PENSION: 2600,
}

const calculateSalary = ({ hourlyRate, sickDays, extraVacationDays, extraPension, otherMonthlyCosts }) =>
    Math.round(((((DEFAULT_VALUES.NUMBER_OF_DAYS / 12) - ((sickDays + extraVacationDays) / 12) - 2.5)
        * (hourlyRate * 8 * 0.7))
        - ((DEFAULT_VALUES.DEFAULT_PENSION + extraPension) * 1.2426) - otherMonthlyCosts) / 1.3142)


export { calculateSalary, DEFAULT_VALUES }