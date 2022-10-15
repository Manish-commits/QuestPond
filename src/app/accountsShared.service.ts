export class AccountShared {
    activeUsers: string[] = ["Max", "Anna"];
    inactiveUsers = ["Chris", "Manu"];
    status: string = 'active';

    // toggleStatus(id: number) {
    //     this.status = 'inactive';
    // }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}