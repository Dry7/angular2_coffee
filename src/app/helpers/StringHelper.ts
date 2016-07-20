/**
 * @brief Class for processing string
 */
export class StringHelper
{
    /**
     * @brief Formated phone from integer to formatted string
     * @param phone
     * @returns {string}
     */
    public static phone(phone: string):string {
        if (phone.length == 10) {
            return '+7 (' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6,2) + '-' + phone.substr(8,2);
        }
        return phone;
    }
}