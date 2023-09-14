{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDESDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    type DaysOfWeek = 'Monday' | 'TuesDay' | 'WednesDay';
    enum Days {
        Monday, // 0
        TuesDay,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.TuesDay);
    let day = Days.Saturday;
    day = 10;
    console.log(day);

    let dayOfWeek: DaysOfWeek  = 'Monday';
    dayOfWeek = 'WednesDay'
    
    
}