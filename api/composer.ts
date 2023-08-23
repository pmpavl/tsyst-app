/** Composer interface which composes a request for sending. */
export default interface Composer { compose(host: string): Request }
