export class Student {
    public id: number;
    public firstName: string;
    public lastName: string;
    public room: number;
    public phoneNumber: string;
    constructor(data?) {
        if (data == null || data === 'undefined') {
            return;
        }
        this.id = data.id;
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.room = data.room || '';
        this.phoneNumber = data.phoneNumber || '';
    }
}
