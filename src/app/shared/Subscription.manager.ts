import { Subscription } from 'rxjs';

export class SubscriptionManager {
    private subscriptions: Subscription[] = [];

    public append = (item: Subscription): void => {
        if (item.closed) {
            throw new Error('This subscription has been already unsubscribed');
        } else {
            this.subscriptions.push(item);
        }
    }

    public unsubscribe = (): void => this.subscriptions.forEach(
        (item) => {
            if (!item.closed) {
                item.unsubscribe();
            }
        }
    )
}
