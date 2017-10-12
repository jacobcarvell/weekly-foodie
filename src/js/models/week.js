export default (weekID, sunday = '', monday = '', tuesday = '', wednesday = '', thursday = '', friday = '', saturday = '') => {
    return {
        weekID: {
            sunday: sunday,
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday
        }        
    }
  }