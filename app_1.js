// E-Library Management System JavaScript

// Sample Data
const sampleBooks = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        language: "English",
        isbn: "978-0062315007",
        description: "A magical story about following your dreams",
        available: true,
        totalCopies: 3,
        availableCopies: 2
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Technology",
        language: "English",
        isbn: "978-0132350884",
        description: "A handbook of agile software craftsmanship",
        available: true,
        totalCopies: 2,
        availableCopies: 1
    },
    {
        id: 3,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        language: "English",
        isbn: "978-0062316097",
        description: "A brief history of humankind",
        available: false,
        totalCopies: 2,
        availableCopies: 0
    },
    {
        id: 4,
        title: "गोदान",
        author: "मुंशी प्रेमचंद",
        genre: "Literature",
        language: "Hindi",
        isbn: "978-8171676767",
        description: "A classic Hindi novel about rural Indian life",
        available: true,
        totalCopies: 3,
        availableCopies: 3
    },
    {
        id: 5,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        genre: "Technology",
        language: "English",
        isbn: "978-0262033848",
        description: "Comprehensive introduction to the modern study of computer algorithms",
        available: true,
        totalCopies: 2,
        availableCopies: 1
    },
    {
        id: 6,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        genre: "Biography",
        language: "English",
        isbn: "978-8173711466",
        description: "An autobiography of India's missile man",
        available: true,
        totalCopies: 4,
        availableCopies: 2
    },
    {
        id: 7,
        title: "Shantaram",
        author: "Gregory David Roberts",
        genre: "Fiction",
        language: "English",
        isbn: "978-0312330538",
        description: "A novel based on the author's experiences in Bombay",
        available: true,
        totalCopies: 2,
        availableCopies: 2
    },
    {
        id: 8,
        title: "The Immortals of Meluha",
        author: "Amish Tripathi",
        genre: "Mythology",
        language: "English",
        isbn: "978-9380658742",
        description: "The first book in the Shiva trilogy",
        available: false,
        totalCopies: 3,
        availableCopies: 0
    },
    {
        id: 9,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        language: "English",
        isbn: "978-0735211292",
        description: "Tiny changes, remarkable results",
        available: true,
        totalCopies: 3,
        availableCopies: 1
    },
    {
        id: 10,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        genre: "Fiction",
        language: "English",
        isbn: "978-0812979657",
        description: "A Booker Prize-winning novel set in Kerala",
        available: true,
        totalCopies: 2,
        availableCopies: 2
    },
    {
        id: 11,
        title: "भारत एक खोज",
        author: "पंडित जवाहरलाल नेहरू",
        genre: "History",
        language: "Hindi",
        isbn: "978-8171676774",
        description: "Discovery of India in Hindi",
        available: true,
        totalCopies: 2,
        availableCopies: 2
    },
    {
        id: 12,
        title: "The Lean Startup",
        author: "Eric Ries",
        genre: "Business",
        language: "English",
        isbn: "978-0307887917",
        description: "How today's entrepreneurs use continuous innovation",
        available: true,
        totalCopies: 2,
        availableCopies: 1
    },
    {
        id: 13,
        title: "Ramayana",
        author: "Valmiki",
        genre: "Mythology",
        language: "English",
        isbn: "978-8172764065",
        description: "The ancient Indian epic",
        available: true,
        totalCopies: 4,
        availableCopies: 3
    },
    {
        id: 14,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self-Help",
        language: "English",
        isbn: "978-1585424337",
        description: "The classic guide to wealth and success",
        available: false,
        totalCopies: 2,
        availableCopies: 0
    },
    {
        id: 15,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Fiction",
        language: "English",
        isbn: "978-1594631931",
        description: "A powerful story of friendship and redemption",
        available: true,
        totalCopies: 3,
        availableCopies: 2
    },
    {
        id: 16,
        title: "Gitanjali",
        author: "Rabindranath Tagore",
        genre: "Poetry",
        language: "English",
        isbn: "978-8172764286",
        description: "Nobel Prize-winning collection of poems",
        available: true,
        totalCopies: 2,
        availableCopies: 2
    },
    {
        id: 17,
        title: "The Art of War",
        author: "Sun Tzu",
        genre: "Philosophy",
        language: "English",
        isbn: "978-1599869773",
        description: "Ancient Chinese military treatise",
        available: true,
        totalCopies: 3,
        availableCopies: 1
    },
    {
        id: 18,
        title: "मैं होऊं ना",
        author: "रवीन्द्र नाथ टैगोर",
        genre: "Poetry",
        language: "Hindi",
        isbn: "978-8171676781",
        description: "Collection of Hindi poems",
        available: true,
        totalCopies: 2,
        availableCopies: 2
    },
    {
        id: 19,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "Biography",
        language: "English",
        isbn: "978-1451648539",
        description: "The exclusive biography of Apple's co-founder",
        available: true,
        totalCopies: 2,
        availableCopies: 1
    },
    {
        id: 20,
        title: "The White Tiger",
        author: "Aravind Adiga",
        genre: "Fiction",
        language: "English",
        isbn: "978-1416562603",
        description: "Booker Prize-winning novel about modern India",
        available: false,
        totalCopies: 2,
        availableCopies: 0
    }
];

// System Configuration
const config = {
    borrowingPeriodDays: 14,
    maxBooksPerUser: 5,
    renewalPeriodDays: 7,
    lateFeePerDay: 5,
    currency: "INR"
};

// Global State
let currentUser = null;
let books = [...sampleBooks];
let selectedBook = null;
let mobileMenuOpen = false;

// Initialize demo users first
function initializeDemoUsers() {
    try {
        const users = JSON.parse(localStorage.getItem('elibrary_users') || '[]');
        
        if (!users.find(u => u.email === 'admin@elibrary.com')) {
            const adminUser = {
                id: 1,
                name: 'Admin User',
                email: 'admin@elibrary.com',
                phone: '9999999999',
                address: 'Admin Address',
                password: 'admin123',
                role: 'admin',
                borrowedBooks: [],
                joinDate: new Date().toISOString(),
                totalFines: 0
            };
            
            users.push(adminUser);
        }
        
        if (!users.find(u => u.email === 'demo@elibrary.com')) {
            const demoUser = {
                id: 2,
                name: 'Demo User',
                email: 'demo@elibrary.com',
                phone: '8888888888',
                address: 'Demo Address',
                password: 'demo123',
                role: 'user',
                borrowedBooks: [
                    {
                        bookId: 1,
                        title: "The Alchemist",
                        author: "Paulo Coelho",
                        borrowDate: new Date(Date.now() - (10 * 24 * 60 * 60 * 1000)).toISOString(),
                        dueDate: new Date(Date.now() + (4 * 24 * 60 * 60 * 1000)).toISOString(),
                        returned: false,
                        fines: 0
                    }
                ],
                joinDate: new Date().toISOString(),
                totalFines: 0
            };
            
            users.push(demoUser);
        }
        
        localStorage.setItem('elibrary_users', JSON.stringify(users));
    } catch (error) {
        console.error('Error initializing demo users:', error);
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize demo users first
    initializeDemoUsers();
    
    // Initialize localStorage if empty
    if (!localStorage.getItem('elibrary_books')) {
        localStorage.setItem('elibrary_books', JSON.stringify(books));
    } else {
        books = JSON.parse(localStorage.getItem('elibrary_books'));
    }

    // Ensure loading screen is hidden and show appropriate section
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }

    // Check for existing user session
    const savedUser = localStorage.getItem('elibrary_current_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showLoggedInState();
            showSection('dashboard');
        } catch (error) {
            console.error('Error loading user session:', error);
            localStorage.removeItem('elibrary_current_user');
            showSection('welcome');
        }
    } else {
        showSection('welcome');
    }

    populateFilters();
    setupEventListeners();
});

function setupEventListeners() {
    // Search and filter event listeners
    const bookSearch = document.getElementById('book-search');
    const genreFilter = document.getElementById('genre-filter');
    const languageFilter = document.getElementById('language-filter');

    if (bookSearch) bookSearch.addEventListener('input', filterBooks);
    if (genreFilter) genreFilter.addEventListener('change', filterBooks);
    if (languageFilter) languageFilter.addEventListener('change', filterBooks);

    // Close modals when clicking outside
    const bookModal = document.getElementById('book-modal');
    const confirmModal = document.getElementById('confirm-modal');
    
    if (bookModal) {
        bookModal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }

    if (confirmModal) {
        confirmModal.addEventListener('click', function(e) {
            if (e.target === this) closeConfirmModal();
        });
    }
}

// Authentication Functions
function handleLogin(event) {
    event.preventDefault();
    showLoading();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    setTimeout(() => {
        try {
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('elibrary_users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);

            hideLoading();

            if (user) {
                currentUser = user;
                localStorage.setItem('elibrary_current_user', JSON.stringify(user));
                showLoggedInState();
                showSection('dashboard');
                updateDashboard();
                showToast('Login successful!', 'success');
            } else {
                showToast('Invalid email or password', 'error');
            }
        } catch (error) {
            hideLoading();
            showToast('Login failed. Please try again.', 'error');
        }
    }, 1000);
}

function handleRegister(event) {
    event.preventDefault();
    showLoading();

    const formData = new FormData(event.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
        hideLoading();
        showToast('Passwords do not match', 'error');
        return;
    }

    setTimeout(() => {
        try {
            const users = JSON.parse(localStorage.getItem('elibrary_users') || '[]');
            const email = formData.get('email');

            // Check if user already exists
            if (users.find(u => u.email === email)) {
                hideLoading();
                showToast('User with this email already exists', 'error');
                return;
            }

            const newUser = {
                id: Date.now(),
                name: formData.get('name'),
                email: email,
                phone: formData.get('phone'),
                address: formData.get('address'),
                password: password,
                role: email === 'admin@elibrary.com' ? 'admin' : 'user',
                borrowedBooks: [],
                joinDate: new Date().toISOString(),
                totalFines: 0
            };

            users.push(newUser);
            localStorage.setItem('elibrary_users', JSON.stringify(users));

            currentUser = newUser;
            localStorage.setItem('elibrary_current_user', JSON.stringify(newUser));

            hideLoading();
            showLoggedInState();
            showSection('dashboard');
            updateDashboard();
            showToast('Registration successful! Welcome to E-Library!', 'success');
        } catch (error) {
            hideLoading();
            showToast('Registration failed. Please try again.', 'error');
        }
    }, 1000);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('elibrary_current_user');
    showSection('welcome');
    const mainNav = document.getElementById('main-nav');
    if (mainNav) mainNav.classList.add('hidden');
    showToast('Logged out successfully', 'success');
}

function showLoggedInState() {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) mainNav.classList.remove('hidden');
    
    // Show admin nav item if user is admin
    if (currentUser && currentUser.role === 'admin') {
        const adminNav = document.getElementById('admin-nav');
        if (adminNav) adminNav.classList.remove('hidden');
    }
}

// Section Management
function showSection(sectionName) {
    try {
        // Hide all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.add('hidden'));

        // Show selected section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('fade-in');
        }

        // Update navigation active state
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));

        // Load section-specific data
        switch(sectionName) {
            case 'books':
                renderBooks();
                break;
            case 'dashboard':
                updateDashboard();
                break;
            case 'my-books':
                renderBorrowedBooks();
                break;
            case 'profile':
                loadProfileData();
                break;
            case 'payment':
                updatePaymentInfo();
                break;
        }
    } catch (error) {
        console.error('Error showing section:', sectionName, error);
    }
}

// Book Management Functions
function renderBooks(filteredBooks = null) {
    try {
        const booksGrid = document.getElementById('books-grid');
        if (!booksGrid) return;

        const booksToRender = filteredBooks || books;

        if (booksToRender.length === 0) {
            booksGrid.innerHTML = '<div class="empty-state">No books found matching your criteria</div>';
            return;
        }

        booksGrid.innerHTML = booksToRender.map(book => `
            <div class="book-card" onclick="openBookModal(${book.id})">
                <div class="book-cover">
                    <i class="fas fa-book-open"></i>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                    <div class="book-meta">
                        <span class="book-genre">${book.genre}</span>
                        <span class="book-language">${book.language}</span>
                    </div>
                    <div class="book-availability">
                        <span class="availability-status ${book.available ? 'available' : 'unavailable'}">
                            ${book.available ? 'Available' : 'Not Available'}
                        </span>
                        <span class="copies-info">${book.availableCopies}/${book.totalCopies}</span>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error rendering books:', error);
    }
}

function populateFilters() {
    try {
        const genres = [...new Set(books.map(book => book.genre))];
        const languages = [...new Set(books.map(book => book.language))];

        const genreFilter = document.getElementById('genre-filter');
        const languageFilter = document.getElementById('language-filter');

        if (genreFilter) {
            genreFilter.innerHTML = '<option value="">All Genres</option>' +
                genres.map(genre => `<option value="${genre}">${genre}</option>`).join('');
        }

        if (languageFilter) {
            languageFilter.innerHTML = '<option value="">All Languages</option>' +
                languages.map(language => `<option value="${language}">${language}</option>`).join('');
        }
    } catch (error) {
        console.error('Error populating filters:', error);
    }
}

function filterBooks() {
    try {
        const searchInput = document.getElementById('book-search');
        const genreFilter = document.getElementById('genre-filter');
        const languageFilter = document.getElementById('language-filter');

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const genreFilterValue = genreFilter ? genreFilter.value : '';
        const languageFilterValue = languageFilter ? languageFilter.value : '';

        const filteredBooks = books.filter(book => {
            const matchesSearch = !searchTerm || 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm);
            
            const matchesGenre = !genreFilterValue || book.genre === genreFilterValue;
            const matchesLanguage = !languageFilterValue || book.language === languageFilterValue;

            return matchesSearch && matchesGenre && matchesLanguage;
        });

        renderBooks(filteredBooks);
    } catch (error) {
        console.error('Error filtering books:', error);
    }
}

// Modal Functions
function openBookModal(bookId) {
    try {
        selectedBook = books.find(book => book.id === bookId);
        if (!selectedBook) return;

        const elements = {
            title: document.getElementById('modal-book-title'),
            author: document.getElementById('modal-book-author'),
            genre: document.getElementById('modal-book-genre'),
            language: document.getElementById('modal-book-language'),
            isbn: document.getElementById('modal-book-isbn'),
            availability: document.getElementById('modal-book-availability'),
            description: document.getElementById('modal-book-description')
        };

        if (elements.title) elements.title.textContent = selectedBook.title;
        if (elements.author) elements.author.textContent = selectedBook.author;
        if (elements.genre) elements.genre.textContent = selectedBook.genre;
        if (elements.language) elements.language.textContent = selectedBook.language;
        if (elements.isbn) elements.isbn.textContent = selectedBook.isbn;
        if (elements.availability) {
            elements.availability.textContent = selectedBook.available ? 
                `Available (${selectedBook.availableCopies}/${selectedBook.totalCopies})` : 'Not Available';
        }
        if (elements.description) elements.description.textContent = selectedBook.description;

        const borrowBtn = document.getElementById('borrow-btn');
        if (borrowBtn) {
            if (!currentUser) {
                borrowBtn.textContent = 'Login to Borrow';
                borrowBtn.onclick = () => {
                    closeModal();
                    showSection('login');
                };
            } else if (!selectedBook.available) {
                borrowBtn.textContent = 'Not Available';
                borrowBtn.disabled = true;
            } else if (currentUser.borrowedBooks && currentUser.borrowedBooks.length >= config.maxBooksPerUser) {
                borrowBtn.textContent = 'Borrowing Limit Reached';
                borrowBtn.disabled = true;
            } else if (currentUser.borrowedBooks && currentUser.borrowedBooks.find(b => b.bookId === selectedBook.id)) {
                borrowBtn.textContent = 'Already Borrowed';
                borrowBtn.disabled = true;
            } else {
                borrowBtn.textContent = 'Borrow Book';
                borrowBtn.disabled = false;
                borrowBtn.onclick = borrowBook;
            }
        }

        const modal = document.getElementById('book-modal');
        if (modal) modal.classList.remove('hidden');
    } catch (error) {
        console.error('Error opening book modal:', error);
    }
}

function closeModal() {
    const modal = document.getElementById('book-modal');
    if (modal) modal.classList.add('hidden');
    selectedBook = null;
}

function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.add('hidden');
}

// Borrowing Functions
function borrowBook() {
    if (!currentUser || !selectedBook || !selectedBook.available) return;

    showConfirmModal(
        'Confirm Borrowing',
        `Are you sure you want to borrow "${selectedBook.title}"? You will need to return it within ${config.borrowingPeriodDays} days.`,
        () => {
            try {
                const borrowedBook = {
                    bookId: selectedBook.id,
                    title: selectedBook.title,
                    author: selectedBook.author,
                    borrowDate: new Date().toISOString(),
                    dueDate: new Date(Date.now() + (config.borrowingPeriodDays * 24 * 60 * 60 * 1000)).toISOString(),
                    returned: false,
                    fines: 0
                };

                // Update user's borrowed books
                if (!currentUser.borrowedBooks) currentUser.borrowedBooks = [];
                currentUser.borrowedBooks.push(borrowedBook);

                // Update book availability
                selectedBook.availableCopies--;
                if (selectedBook.availableCopies === 0) {
                    selectedBook.available = false;
                }

                // Update localStorage
                updateUserInStorage();
                updateBooksInStorage();

                closeModal();
                closeConfirmModal();
                showToast('Book borrowed successfully!', 'success');
                updateDashboard();
            } catch (error) {
                console.error('Error borrowing book:', error);
                showToast('Error borrowing book. Please try again.', 'error');
            }
        }
    );
}

function returnBook(bookId) {
    if (!currentUser) return;

    try {
        const borrowedBookIndex = currentUser.borrowedBooks.findIndex(b => b.bookId === bookId);
        if (borrowedBookIndex === -1) return;

        const borrowedBook = currentUser.borrowedBooks[borrowedBookIndex];
        const book = books.find(b => b.id === bookId);

        // Calculate late fees
        const now = new Date();
        const dueDate = new Date(borrowedBook.dueDate);
        let lateFee = 0;

        if (now > dueDate) {
            const daysLate = Math.ceil((now - dueDate) / (24 * 60 * 60 * 1000));
            lateFee = daysLate * config.lateFeePerDay;
        }

        showConfirmModal(
            'Confirm Return',
            `Are you sure you want to return "${borrowedBook.title}"?${lateFee > 0 ? ` A late fee of ₹${lateFee} will be added to your account.` : ''}`,
            () => {
                try {
                    // Remove from borrowed books
                    currentUser.borrowedBooks.splice(borrowedBookIndex, 1);

                    // Add late fee to user account
                    if (lateFee > 0) {
                        currentUser.totalFines = (currentUser.totalFines || 0) + lateFee;
                    }

                    // Update book availability
                    if (book) {
                        book.availableCopies++;
                        book.available = true;
                    }

                    // Update localStorage
                    updateUserInStorage();
                    updateBooksInStorage();

                    closeConfirmModal();
                    showToast(`Book returned successfully!${lateFee > 0 ? ` Late fee: ₹${lateFee}` : ''}`, 'success');
                    renderBorrowedBooks();
                    updateDashboard();
                } catch (error) {
                    console.error('Error returning book:', error);
                    showToast('Error returning book. Please try again.', 'error');
                }
            }
        );
    } catch (error) {
        console.error('Error in return book process:', error);
    }
}

function renderBorrowedBooks() {
    try {
        const container = document.getElementById('borrowed-books-list');
        if (!container) return;
        
        if (!currentUser || !currentUser.borrowedBooks || currentUser.borrowedBooks.length === 0) {
            container.innerHTML = '<p class="empty-state">You haven\'t borrowed any books yet</p>';
            return;
        }

        container.innerHTML = currentUser.borrowedBooks.map(borrowedBook => {
            const now = new Date();
            const dueDate = new Date(borrowedBook.dueDate);
            const isOverdue = now > dueDate;
            const daysOverdue = isOverdue ? Math.ceil((now - dueDate) / (24 * 60 * 60 * 1000)) : 0;
            const currentFine = isOverdue ? daysOverdue * config.lateFeePerDay : 0;

            return `
                <div class="borrowed-book-item">
                    <div class="borrowed-book-header">
                        <div>
                            <div class="borrowed-book-title">${borrowedBook.title}</div>
                            <div class="borrowed-book-author">by ${borrowedBook.author}</div>
                        </div>
                    </div>
                    <div class="borrowed-book-details">
                        <div class="detail-item">
                            <span class="detail-label">Borrow Date</span>
                            <span class="detail-value">${new Date(borrowedBook.borrowDate).toLocaleDateString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Due Date</span>
                            <span class="detail-value ${isOverdue ? 'overdue' : ''}">${new Date(borrowedBook.dueDate).toLocaleDateString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Status</span>
                            <span class="detail-value ${isOverdue ? 'overdue' : ''}">${isOverdue ? `Overdue (${daysOverdue} days)` : 'On Time'}</span>
                        </div>
                        ${currentFine > 0 ? `
                        <div class="detail-item">
                            <span class="detail-label">Current Fine</span>
                            <span class="detail-value overdue">₹${currentFine}</span>
                        </div>
                        ` : ''}
                    </div>
                    <div class="borrowed-book-actions">
                        <button class="btn btn--primary" onclick="returnBook(${borrowedBook.bookId})">Return Book</button>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error rendering borrowed books:', error);
    }
}

// Dashboard Functions
function updateDashboard() {
    if (!currentUser) return;

    try {
        const borrowedCount = currentUser.borrowedBooks ? currentUser.borrowedBooks.length : 0;
        let overdueCount = 0;
        let totalFines = currentUser.totalFines || 0;

        if (currentUser.borrowedBooks) {
            const now = new Date();
            currentUser.borrowedBooks.forEach(borrowedBook => {
                const dueDate = new Date(borrowedBook.dueDate);
                if (now > dueDate) {
                    overdueCount++;
                    const daysOverdue = Math.ceil((now - dueDate) / (24 * 60 * 60 * 1000));
                    totalFines += daysOverdue * config.lateFeePerDay;
                }
            });
        }

        const elements = {
            borrowedCount: document.getElementById('borrowed-count'),
            overdueCount: document.getElementById('overdue-count'),
            totalFines: document.getElementById('total-fines')
        };

        if (elements.borrowedCount) elements.borrowedCount.textContent = borrowedCount;
        if (elements.overdueCount) elements.overdueCount.textContent = overdueCount;
        if (elements.totalFines) elements.totalFines.textContent = `₹${totalFines}`;

        // Update recent activities
        const recentActivitiesList = document.getElementById('recent-activities-list');
        if (recentActivitiesList) {
            if (borrowedCount === 0) {
                recentActivitiesList.innerHTML = '<p class="empty-state">No recent activities</p>';
            } else {
                const recentBooks = currentUser.borrowedBooks.slice(-3).reverse();
                recentActivitiesList.innerHTML = recentBooks.map(book => `
                    <div class="activity-item">
                        <span>Borrowed "${book.title}"</span>
                        <span>${new Date(book.borrowDate).toLocaleDateString()}</span>
                    </div>
                `).join('');
            }
        }
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// Profile Functions
function loadProfileData() {
    if (!currentUser) return;

    try {
        const form = document.getElementById('profile-form');
        if (form) {
            if (form.elements.name) form.elements.name.value = currentUser.name;
            if (form.elements.email) form.elements.email.value = currentUser.email;
            if (form.elements.phone) form.elements.phone.value = currentUser.phone;
            if (form.elements.address) form.elements.address.value = currentUser.address;
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

function updateProfile(event) {
    event.preventDefault();
    
    try {
        const formData = new FormData(event.target);
        
        currentUser.name = formData.get('name');
        currentUser.phone = formData.get('phone');
        currentUser.address = formData.get('address');

        updateUserInStorage();
        showToast('Profile updated successfully!', 'success');
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Error updating profile. Please try again.', 'error');
    }
}

// Admin Functions
function addNewBook(event) {
    event.preventDefault();

    try {
        const formData = new FormData(event.target);
        const totalCopies = parseInt(formData.get('totalCopies'));

        const newBook = {
            id: Date.now(),
            title: formData.get('title'),
            author: formData.get('author'),
            genre: formData.get('genre'),
            language: formData.get('language'),
            isbn: formData.get('isbn'),
            description: formData.get('description'),
            available: true,
            totalCopies: totalCopies,
            availableCopies: totalCopies
        };

        books.push(newBook);
        updateBooksInStorage();
        populateFilters();

        event.target.reset();
        showToast('Book added successfully!', 'success');
    } catch (error) {
        console.error('Error adding new book:', error);
        showToast('Error adding book. Please try again.', 'error');
    }
}

// Payment Functions
function updatePaymentInfo() {
    if (!currentUser) return;

    try {
        let totalFines = currentUser.totalFines || 0;

        // Calculate current fines from overdue books
        if (currentUser.borrowedBooks) {
            const now = new Date();
            currentUser.borrowedBooks.forEach(borrowedBook => {
                const dueDate = new Date(borrowedBook.dueDate);
                if (now > dueDate) {
                    const daysOverdue = Math.ceil((now - dueDate) / (24 * 60 * 60 * 1000));
                    totalFines += daysOverdue * config.lateFeePerDay;
                }
            });
        }

        const paymentAmount = document.getElementById('payment-amount');
        const totalPaymentAmount = document.getElementById('total-payment-amount');
        const payBtn = document.getElementById('pay-now-btn');

        if (paymentAmount) paymentAmount.textContent = `₹${totalFines}`;
        if (totalPaymentAmount) totalPaymentAmount.textContent = `₹${totalFines}`;

        if (payBtn) {
            if (totalFines === 0) {
                payBtn.textContent = 'No Outstanding Fines';
                payBtn.disabled = true;
            } else {
                payBtn.textContent = 'Pay with Razorpay';
                payBtn.disabled = false;
            }
        }
    } catch (error) {
        console.error('Error updating payment info:', error);
    }
}

function processPayment() {
    if (!currentUser) return;

    try {
        let totalFines = currentUser.totalFines || 0;

        // Calculate current fines from overdue books
        if (currentUser.borrowedBooks) {
            const now = new Date();
            currentUser.borrowedBooks.forEach(borrowedBook => {
                const dueDate = new Date(borrowedBook.dueDate);
                if (now > dueDate) {
                    const daysOverdue = Math.ceil((now - dueDate) / (24 * 60 * 60 * 1000));
                    totalFines += daysOverdue * config.lateFeePerDay;
                }
            });
        }

        if (totalFines === 0) return;

        showLoading();

        // Simulate Razorpay payment
        setTimeout(() => {
            hideLoading();
            
            // Reset user fines
            currentUser.totalFines = 0;
            updateUserInStorage();
            
            showToast(`Payment of ₹${totalFines} completed successfully!`, 'success');
            updatePaymentInfo();
            updateDashboard();
        }, 2000);
    } catch (error) {
        hideLoading();
        console.error('Error processing payment:', error);
        showToast('Payment failed. Please try again.', 'error');
    }
}

// Utility Functions
function updateUserInStorage() {
    if (!currentUser) return;

    try {
        localStorage.setItem('elibrary_current_user', JSON.stringify(currentUser));
        
        const users = JSON.parse(localStorage.getItem('elibrary_users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('elibrary_users', JSON.stringify(users));
        }
    } catch (error) {
        console.error('Error updating user in storage:', error);
    }
}

function updateBooksInStorage() {
    try {
        localStorage.setItem('elibrary_books', JSON.stringify(books));
    } catch (error) {
        console.error('Error updating books in storage:', error);
    }
}

function showConfirmModal(title, message, onConfirm) {
    try {
        const titleEl = document.getElementById('confirm-title');
        const messageEl = document.getElementById('confirm-message');
        const confirmBtn = document.getElementById('confirm-yes-btn');
        const modal = document.getElementById('confirm-modal');

        if (titleEl) titleEl.textContent = title;
        if (messageEl) messageEl.textContent = message;
        if (confirmBtn) confirmBtn.onclick = onConfirm;
        if (modal) modal.classList.remove('hidden');
    } catch (error) {
        console.error('Error showing confirm modal:', error);
    }
}

function showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.classList.remove('hidden');
}

function hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.classList.add('hidden');
}

function showToast(message, type = 'success') {
    try {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        
        if (toastMessage) toastMessage.textContent = message;
        if (toast) {
            toast.className = `toast ${type}`;
            toast.classList.add('show');

            setTimeout(() => {
                hideToast();
            }, 5000);
        }
    } catch (error) {
        console.error('Error showing toast:', error);
    }
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.remove('show');
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    mobileMenuOpen = !mobileMenuOpen;
    
    if (navMenu) {
        if (mobileMenuOpen) {
            navMenu.classList.add('show');
        } else {
            navMenu.classList.remove('show');
        }
    }
}

// Close mobile menu when clicking on a nav link
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link') && mobileMenuOpen) {
        toggleMobileMenu();
    }
});