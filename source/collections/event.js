export class MulticastDelegate extends Set {
    publish(value) {
        for (const subscriber of this) {
            subscriber(value);
        }
    }
}

export class EventBroker extends Map {
    publish(topic, value) {
        this.get(topic)?.publish(value);
    }

    subscribe(topic, subscriber) {
        if (this.has(topic)) {
            this.get(topic).add(subscriber);
        } else {
            this.set(topic, new MulticastDelegate([subscriber]));
        }
    }

    unsubscribe(topic, subscriber) {
        if (this.has(topic)) {
            const set = this.get(topic);
            if (set.size === 1) {
                this.delete(topic);
            } else {
                set.delete(subscriber);
            }
        }
    }
}