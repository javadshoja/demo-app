const books = [
	{ id: 'book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: 'book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: 'book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: 'book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: 'book-5', author: 'George Orwell', title: '1984' },
	{ id: 'book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: 'book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: 'book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: 'book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: 'book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '1book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '1book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '1book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '1book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '1book-5', author: 'George Orwell', title: '1984' },
	{ id: '1book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '1book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '1book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '1book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '1book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '2book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '2book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '2book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '2book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '2book-5', author: 'George Orwell', title: '1984' },
	{ id: '2book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '2book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '2book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '2book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '2book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '3book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '3book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '3book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '3book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '3book-5', author: 'George Orwell', title: '1984' },
	{ id: '3book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '3book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '3book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '3book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '3book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '4book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '4book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '4book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '4book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '4book-5', author: 'George Orwell', title: '1984' },
	{ id: '4book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '4book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '4book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '4book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '4book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '5book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '5book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '5book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '5book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '5book-5', author: 'George Orwell', title: '1984' },
	{ id: '5book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '5book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '5book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '5book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '5book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '7book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '7book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '7book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '7book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '7book-5', author: 'George Orwell', title: '1984' },
	{ id: '7book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '7book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '7book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '7book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '7book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '8book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '8book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '8book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '8book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '8book-5', author: 'George Orwell', title: '1984' },
	{ id: '8book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '8book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '8book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '8book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '8book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	},
	{ id: '9book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: '9book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: '9book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: '9book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: '9book-5', author: 'George Orwell', title: '1984' },
	{ id: '9book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: '9book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: '9book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov'
	},
	{ id: '9book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{
		id: '9book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment'
	}
]

export default books
