export class ClockService {
    getEpochTime() {
        return Promise.resolve(Date.now() / 1000 | 0);
    }
}
//# sourceMappingURL=ClockService.js.map