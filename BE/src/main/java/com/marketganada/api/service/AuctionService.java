package com.marketganada.api.service;

import com.marketganada.api.request.AuctionInsertRequest;

import com.marketganada.db.entity.Auction;
import com.marketganada.db.entity.Likes;
import com.marketganada.db.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AuctionService {
    public String insertAuction(AuctionInsertRequest auctionInsertRequest, List<MultipartFile> auctionImages, Long userId);
    public Auction getAuctionById(Long auctionId);
    public boolean isThisAuctionMine(Auction auction, Long userId);
    public boolean isThisAuctionLiked(Auction auction, Long userId);
    public String deleteAuction(Long auctionId, Long userId);
    public String insertAuctionLike(Long auctionId, Long userId);
    public String deleteAuctionLike(Long auctionId, Long userId);
    public Page<Auction> getRecentAuctionList(Pageable pageable);
    public List<Auction> getAuctionPhoneList(String brand, String model, String save, Pageable pageable);
    public List<Auction> getAuctionEarphoneList(String brand, String model, Pageable pageable);
    List<Likes> getLikeAuctionList(User user);
    Long getAuctionCnt(String category, String brand, String model, String save);
}
