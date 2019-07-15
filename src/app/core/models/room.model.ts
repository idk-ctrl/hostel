export class Room {
    public id: number;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public institute: string;
    public course: string;
    public room: Room;
    public privilges: string;
    public city: string;
    public service: string;
    public email: string;

    constructor(data?) {
        if (data == null || data === 'undefined') {
            return;
        }
        this.id = data.id;
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.room = data.room || '';
        this.phoneNumber = data.phoneNumber || '';
        this.institute = data.institute;
        this.course = data.course || '';
        this.room = data.room || '';
        this.privilges = data.privilges || '';
        this.city = data.city || '';
        this.service = data.service;
    }
}
