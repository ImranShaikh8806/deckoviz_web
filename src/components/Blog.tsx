import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://auth.deckoviz.com/blogs/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setBlogPosts(data.results || []);
        
        // Initialize selected image index for each post
        const initialImageIndex = {};
        data.results?.forEach(post => {
          if (post.images && post.images.length > 0) {
            initialImageIndex[post.id] = 0;
          }
        });
        setSelectedImageIndex(initialImageIndex);
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Auto-slide effect for multiple images
  useEffect(() => {
    const intervals = {};
    
    blogPosts.forEach(post => {
      if (post.images && post.images.length > 1) {
        intervals[post.id] = setInterval(() => {
          setSelectedImageIndex(prev => {
            const currentIndex = prev[post.id] || 0;
            const nextIndex = currentIndex >= post.images.length - 1 ? 0 : currentIndex + 1;
            return { ...prev, [post.id]: nextIndex };
          });
        }, 4000);
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [blogPosts]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      console.error('Error formatting date:', e);
      return '';
    }
  };

  const truncateDescription = (description, maxLength = 120) => {
    if (!description) return '';
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  const handleImageNavigation = (postId, direction) => {
    const post = blogPosts.find(p => p.id === postId);
    if (!post || !post.images || post.images.length <= 1) return;
    
    setSelectedImageIndex(prev => {
      const currentIndex = prev[postId] || 0;
      const maxIndex = post.images.length - 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return { ...prev, [postId]: newIndex };
    });
  };

  const handleCardClick = (postId) => {
    setSelectedCard(selectedCard === postId ? null : postId);
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mb-8 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Amazing Content</h3>
          <p className="text-gray-600">Preparing something special for you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-12 rounded-3xl shadow-2xl max-w-lg mx-auto border border-red-100">
          <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">We're having trouble loading the content. Please check your connection and try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-20'>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blogs
          </h1>
          <p className="text-xl text-white/90">
            Latest insights and stories 
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-40 h-40 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-12 shadow-inner">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">No Stories Yet</h3>
              <p className="text-gray-600 text-xl max-w-md mx-auto">Great content is coming soon. Stay tuned for amazing stories!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => handleCardClick(post.id)}
                  className={`group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                    selectedCard === post.id ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl scale-105' : ''
                  }`}
                >
                  {/* Image Carousel */}
                  {post.images && post.images.length > 0 && (
                    <div className="relative h-64 overflow-hidden rounded-t-3xl">
                      <img 
                        src={post.images[selectedImageIndex[post.id] || 0]} 
                        alt={post.title || 'Blog post image'} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x256/6366f1/ffffff?text=Image+Not+Available';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Manual Navigation */}
                      {post.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageNavigation(post.id, 'prev');
                            }}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageNavigation(post.id, 'next');
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          
                          {/* Image Counter */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                            {(selectedImageIndex[post.id] || 0) + 1}/{post.images.length}
                          </div>
                          
                          {/* Dot Indicators */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {post.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedImageIndex(prev => ({ ...prev, [post.id]: index }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === (selectedImageIndex[post.id] || 0) 
                                    ? 'bg-white w-6' 
                                    : 'bg-white/60 hover:bg-white/80'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <div className="p-8">
                    {/* Date and Tags */}
                    <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
                      <time className="inline-flex items-center text-sm font-medium text-blue-700 bg-blue-50 px-4 py-2 rounded-full">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(post.created_at)}
                      </time>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span 
                              key={`${tag}-${index}`} 
                              className="px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-50 rounded-full">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {post.title || 'Untitled Blog Post'}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">
                      {truncateDescription(post.description)}
                    </p>

                    {/* Read More Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(post);
                      }}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                    >
                      <span>Read More</span>
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for Full Blog Post */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 p-6 flex items-center justify-between z-10">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h1>
                <p className="text-gray-600 mt-1">{formatDate(selectedPost.created_at)}</p>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Featured Image */}
              {selectedPost.images && selectedPost.images.length > 0 && (
                <div className="relative h-90 rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={selectedPost.images[selectedImageIndex[selectedPost.id] || 0]} 
                    alt={selectedPost.title} 
                    className="w-full h-80 object-cover"
                  />
                  {selectedPost.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedPost.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(prev => ({ ...prev, [selectedPost.id]: index }))}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === (selectedImageIndex[selectedPost.id] || 0) 
                              ? 'bg-white w-8' 
                              : 'bg-white/60 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {selectedPost.tags && selectedPost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={`${tag}-${index}`} 
                      className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Full Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedPost.description || 'Full content would be loaded here from your API...'}
                </p>
                
               
              
              </div>

         
              
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Blog;